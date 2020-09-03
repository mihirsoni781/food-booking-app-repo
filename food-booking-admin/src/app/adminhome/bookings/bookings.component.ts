import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private as: AdminService) { }
  bookings=[]
  ngOnInit(): void {
    this.as.getAllOrders()
      .subscribe(res=>{
        this.bookings = res;
      },
      err=>{
        console.log(err);
      })
  }

}
