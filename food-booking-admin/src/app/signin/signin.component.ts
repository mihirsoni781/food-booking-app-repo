import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AdminAuthService} from '../admin-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers:[AdminAuthService]
})
export class SigninComponent implements OnInit {
  signin=1
  constructor(private adminAuthService: AdminAuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.adminAuthService.hasToken())
      this.router.navigate(['/admin/categories' ])
  }
  
  alertMsg;
  AdminSignUp(form){
    console.log(form);
    this.adminAuthService.signUp(form)
      .subscribe(res=>{
        if(res.reg==1){
          this.signin=1;
          this.alertMsg="Registered Successfully Sign In to Continue";
          setInterval((document)=>{
            this.alertMsg = null;
          },4000)
        }
      },err=>{
        console.log(err);
      })
  }

  AdminSignIn(form){
    this.adminAuthService.signIn(form)
      .subscribe(res=>{
        console.log(res);
        
        if(res.founds==0)
          {
          this.alertMsg = "Email address not registered";
          setInterval((document) => {
            this.alertMsg = null;
          }, 10000)
          }
        else if(res.pass==0)
        {
          this.alertMsg = "Invalid Password !";
          setInterval((document) => {
            this.alertMsg = null;
          }, 10000)
        }
        else if(res.token){
          localStorage.setItem('token',res.token);
          this.router.navigate(['/admin/categories']) 
        }
      },
        err=>{
          console.log(err);
        })
  }

}
