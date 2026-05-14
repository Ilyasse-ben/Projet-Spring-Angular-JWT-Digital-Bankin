import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  api: string = "http://localhost:8081/auth/login";
  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: string;

  constructor(private http: HttpClient) {

  }

  login(userName: string, password: string) {
    let parms = new HttpParams().set("userName", userName).set("password", password)
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    return this.http.post(this.api, parms, options);
  }
  loadProfile(data: any) {
    this.isAuthenticated=true
    this.accessToken = data['access-token'];
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }
}
