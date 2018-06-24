import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    // post this detial to api server
    return this.http.post('./test/api', {
      username,
      password
    }).subscribe(data => {
        console.log(data, 'is what we got from the server');
    });
  }
}
