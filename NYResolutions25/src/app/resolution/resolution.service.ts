import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { ResolutionItem } from '../../shared/models/resolutionItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolutionService {
  constructor(private http: HttpClient) {}
  // private http = inject(HttpClient);

  private getStandartOptions(): any {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  getResolutions() {
    let options = this.getStandartOptions();
    options.params = new HttpParams({
      fromObject: { format: 'json' },
    });
    let url: string = '../assets/resolutions.json'; //cannot GET this link, but in tutorial works fine idk
    return this.http.get(url, options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:',
        error.error,
      );
    } else {
      console.error('Server-side error', error.error);
    }
    return throwError(
      () =>
        new Error(
          'Cannot retrieve resolution from the server. Please try again',
        ),
    );
  }

  addResolution(resolution: ResolutionItem) {
    let options = this.getStandartOptions();
    let url: string = 'assets/resolutions.json';
    options.headers = options.headers.set(
      'Authorization',
      'value-need-for-authorization',
    );
    this.http.post(url, resolution, options);
  }
}
