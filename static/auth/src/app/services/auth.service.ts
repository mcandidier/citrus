import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(data: any) {
    const url = '/api/accounts/login/';
    return this.http.post(url, data);
  }

  public register(data: any) {
    const url = '/api/accounts/register/';
    console.log('register');
    this.http.post(url, data)
    .subscribe(res =>
      console.log(res)
    );
  }

  public update(data: any) {
    // const headers = new HttpHeaders().set('Authorization', 'token 41567939f3d693fab8efc9ec4b24970ad437e656');
    // headers.set('Content-Type', 'multipart/form-data');
    const url = '/api/accounts/update/';

    this.http.post(url, data)
      .subscribe(res =>
        console.log(res)
      );
  }
}