import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data:any) {
    const url = '/api/accounts/login/';
    this.http.post(url, data)
      .subscribe(res =>
        console.log(res)
      );
  }
}