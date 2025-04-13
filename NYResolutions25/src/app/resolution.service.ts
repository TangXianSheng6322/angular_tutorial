import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ResolutionItem } from '../shared/models/resolutionItem';

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
    let url: string = 'assets/resolutions.json';
    return this.http.get(url, options);
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
