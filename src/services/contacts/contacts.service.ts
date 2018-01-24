import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ContactService {
    private apiUrl = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    getContactList(){
        return this.http.get(this.apiUrl);
    }
}
