import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  upload(file) {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.post(`https://api.imgbb.com/1/upload?key=${environment.imgApiKey}`, formData);
  }
}
