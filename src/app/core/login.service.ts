import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(user: string, pass: string){
    return this.http.get(`http://localhost:4201/login/${user}/${pass}`);
  }

  postLogin(user: string, pass: string) {
    let userBody = {
      "name": user,
      "password": pass 
    };
    return this.http.post('http://localhost:4201/login', userBody);
  }
}
