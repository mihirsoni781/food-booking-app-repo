import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  prefix = 'http://localhost:5000'
  signUpUrl = '/userAuth/signUp';
  loginUrl = '/userAuth/logIn';
  constructor(private http: HttpClient) { }

  signUp(form){
    console.log(form);
    return <any>this.http.post(this.prefix +this.signUpUrl,form);
  }

  logIn(form){
    return <any> this.http.post(this.prefix+this.loginUrl,form);
  }

  getUser(){
    return <any>this.http.get(this.prefix +'/userAuth/getUser');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getOrdersByUserId(id){
    return <any>this.http.get(this.prefix +'/order/getOrdersByUserId/'+id)
  }
}

