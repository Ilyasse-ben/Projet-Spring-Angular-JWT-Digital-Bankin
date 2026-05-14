import { HttpInterceptorFn } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login-service';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService: LoginService) { }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("******")
    console.log(request.url);

    // Vérifie si la requête n'est PAS destinée à l'URL de login
    if (!request.url.includes("/auth/login")) {
      console.log("token new"+this.authService.accessToken)
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.authService.accessToken)
      })
      return next.handle(newRequest);
    } else {
      // Si c'est le login, on envoie la requête originale sans header Authorization
      return next.handle(request);
    }
  }

}
