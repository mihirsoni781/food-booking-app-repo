import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NotifyService} from '../notify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nxt=null;
  login = 1;
  constructor(private auth: AuthService, private router: Router, private activeRoute: ActivatedRoute,  private notify: NotifyService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(res=>{
      this.nxt = res.nxt;
    })
    
  }
  alert = null;

  signUp(formdata){
    this.auth.signUp(formdata)
      .subscribe((res,err)=>{
        if(err)
          console.log(err);
        else{
          console.log(res);
          if(res.exist==1){
            this.alert = "Email Address already in use !";
            return
          }
          if(res.saved){
            this.alert = 'Registered successfully ! Login to continue..';
            if (this.alert) {
              setInterval(() => {
                this.alert = null;
              }, 5000)
            }

            return 
          }
        }
      })
  }

  logIn(form){
    this.auth.logIn(form)
      .subscribe((res,err)=>{
        if(err)
          console.log(err);
        else{
          console.log(res);
          if(res.found==0)
          {
            this.alert = 'Please enter registered email address.'
            return
          }
          if(res.pass==0)
          {
            this.alert = 'Invalid password !'
            return
          }
          localStorage.setItem('token',res.token);
          this.notify.updateNotification('userIn');
          
          if(this.nxt){
            this.router.navigate([this.nxt]);  
          }
          else{
            this.router.navigate(['/home']);
          }
        }
      })
  }

}
