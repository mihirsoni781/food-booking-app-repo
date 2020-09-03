import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor( private router: Router, private auth: AdminAuthService) {
   }

  ngOnInit(): void {
    this.auth.getUser()
      .subscribe(res=>{

      },
      err=>{
        if (err.error.access == 0) {
          this.router.navigate(['/signin'])
        }
      }
      )
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
