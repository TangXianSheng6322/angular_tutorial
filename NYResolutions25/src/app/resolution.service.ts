import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResolutionService {
  constructor(private http: HttpClient) {}

  getResolutions() {
    return this.http.get('./assets/resolutions.json');
  }
}
