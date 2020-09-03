import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  signUpUrl = 'http://localhost:5000/authAdmin/signup';
  signInUrl = 'http://localhost:5000/authAdmin/signin';
  constructor(private _http: HttpClient) { }

  signUp(formdata){
    return <any>this._http.post(this.signUpUrl,formdata)
  }

  signIn(formdata){
    console.log(formdata);
    return <any>this._http.post(this.signInUrl, formdata)
  }

  hasToken(){
    return !! localStorage.getItem('token')
  }
  
  getToken(){
    return localStorage.getItem('token')
  }

  getUser(){
    return this._http.get('http://localhost:5000/authAdmin/getAdmin');
  }

}
