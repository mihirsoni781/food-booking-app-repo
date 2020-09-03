import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import {FoodService} from '../food.service';
import {ActivatedRoute, Router}  from '@angular/router';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  constructor(private auth: AuthService, private foodService: FoodService, private activeRoute: ActivatedRoute, private router: Router) { }
  
  order={};

  ngOnInit(): void {
    if(!this.auth.getToken())
    {
      console.log(this.router.url);      
      this.router.navigate(['login'],{queryParams: {nxt:this.router.url}});
    }

    this.activeRoute.url.subscribe((res)=>{
      let foodId = res[1].path;
      this.foodService.getFoodById(foodId)
        .subscribe((res,err)=>{
          if(err)
          {
            console.log(err);
            return
          }
          this.order['name'] = res.name;
          this.order['cost'] = res.cost;
          this.order['description'] = res.description;
          this.order['quantity'] = 1;

          this.auth.getUser()
            .subscribe(res=>{
              this.order['customername'] =res.name;
              this.order['customerphone'] = res.phone;
              this.order['customeremail'] = res.email;
              this.order['customeraddress'] = res.address;
              this.order['customerId'] = res._id;
            },err=>{
              console.log(err);
              
            })      
        })
    })
  }

  placeOrder(){
    this.foodService.placeOrder(this.order)
      .subscribe(res=>{
        console.log(res);
        this.router.navigate(['orderhistory']);        
      },err=>{
        console.log(err);
        
      })
  }

}
