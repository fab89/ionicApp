import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  private apiUrl = 'http://127.0.0.1:8000/users';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return this.http.get(this.apiUrl);
  }
}
