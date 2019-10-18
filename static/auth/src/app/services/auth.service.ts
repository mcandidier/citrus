import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public IsAuthenticated: boolean;

  constructor(private _http: HttpClient) { }

  public login(data: any) {
    const url = '/api/accounts/login/';
    return this._http.post(url, data);
  }

  public register(data: any) {
    const url = '/api/accounts/register/';
    return this._http.post(url, data);
  }

  public getToken() {
    return localStorage.getItem('access-token');
  }

  public setToken(token:string) {
    localStorage.setItem('access-token', token);
  }

  public isAuthenticated() {
    return this.getToken() != null ;
  }
  public update(data: any) {
    // const headers = new HttpHeaders().set('Authorization', 'token 41567939f3d693fab8efc9ec4b24970ad437e656');
    // headers.set('Content-Type', 'multipart/form-data');
    const url = '/api/accounts/update/';

    this._http.post(url, data)
      .subscribe(res =>
        console.log(res)
      );
  }
}