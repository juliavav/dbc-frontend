import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment.prod';
import {Dog, DogForSale} from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {
  }

  getMyDogs() {
    return this.http.get<Dog[]>(`${environment.apiUrl}/dog/list`);
  }

  getDogsForSale() {
    return this.http.get<DogForSale[]>(`${environment.apiUrl}/dog/listForSale`);
  }

  sellDog(id: number, price: number) {
    return this.http.put(`${environment.apiUrl}/dog/update`, {
      id,
      isForSale: true,
      price
    });
  }

  removeFromSale(id: number) {
    return this.http.put(`${environment.apiUrl}/dog/update`, {
      id,
      isForSale: false
    });
  }

  deleteDog(id: number) {
    return this.http.delete(`${environment.apiUrl}/dog/delete/${id}`);
  }

  addDog(dog: Dog) {
    return this.http.post(`${environment.apiUrl}/dog/add`, {
      name: dog.name,
      years: dog.years,
      months: dog.months,
      sex: dog.sex,
      isForSale: false,
      photoUrl: dog.photoUrl
    });
  }
}
