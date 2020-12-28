import {Injectable} from '@angular/core';
import {environment} from '@environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GisService {

  constructor(private http: HttpClient) {
  }

  getGeoJson(id: number) {
    return this.http.get(`https://apidata.mos.ru/v1/datasets/${id}/features?api_key=${environment.apiKey}`);
  }

  getMarker(id: number) {
    return this.http.get(`https://apidata.mos.ru/v1/datasets/${id}/marker?api_key=${environment.apiKey}`);
  }
}
