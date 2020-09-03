import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor( private as: AdminService) { }
  customers = []
  ngOnInit(): void {
    this.as.getAllCustomers()
      .subscribe(res=>{
        this.customers = res;
      },err=>{  
        console.log(err);
      })  
  }

}
