import { Component } from '@angular/core';
import {FoodService} from './food.service';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {NotifyService} from './notify.service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-booking-user';
  menu=0;
  constructor(private foodService: FoodService, private auth : AuthService, private router: Router, private activated: ActivatedRoute, private notify: NotifyService)
  {

  }
  user= {name:null};
  cats = [];
  notifSubs=null;
  ngOnInit(){
    this.notifSubs = this.notify.getNotification()
      .subscribe(msg=>{
        if(msg=='userIn'){
          this.auth.getUser()
            .subscribe(res => {
              console.log(res);

              this.user.name = res.name;
            }, err => {
              console.log(err);
            })
        }
      })

    if(localStorage.getItem('token'))
    {
      this.auth.getUser()
        .subscribe(res=>{
          console.log(res);
          
          this.user.name = res.name;
        },err=>{
          console.log(err);
        })
    }
    this.foodService.getAllCat()
      .subscribe((res,err)=>{
        if(err)
          console.log(err);
        else{
          console.log(res);
          this.cats = res;
        }
      })
  }

  ngOnDestroy(){
    this.notifSubs.unSubscribe();
  }

  logout(){
    
    if(!confirm('logout ?'))
    {
      return
    }
    localStorage.removeItem('token');
    this.router.navigate(['login'])
    this.user.name = null;
  }

}

