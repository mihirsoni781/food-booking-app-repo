import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{


  constructor(private injector: Injector) { }

  intercept(req, next) {
    let auth = this.injector.get(AuthService)
    let newReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    })
    return next.handle(newReq)
  }
}
