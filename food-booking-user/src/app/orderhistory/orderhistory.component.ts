import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private auth: AuthService) { }
  orders = [];
  ngOnInit(): void {
    this.auth.getUser()
      .subscribe(res=>{
        this.auth.getOrdersByUserId(res._id)
          .subscribe(res=>{
            console.log(res);
            this.orders=res;
          },
          err=>{
            console.log(err);
          })
        
      },err=>{
        console.log(err);
        
      })  
  }

}
