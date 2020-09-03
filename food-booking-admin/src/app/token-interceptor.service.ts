import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AdminAuthService} from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  
  intercept(req,next){
    let auth = this.injector.get(AdminAuthService)
    let newReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer '+auth.getToken()
      }
    })
    return next.handle(newReq)
  }
}
