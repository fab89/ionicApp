import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PostService {
    private apiUrl = 'http://jsonplaceholder.typicode.com/posts/';

    constructor(private http: HttpClient) {
    }

    getPosts(page) {
       return this.http.get(this.apiUrl + '?limit=' +page);
    }
}
