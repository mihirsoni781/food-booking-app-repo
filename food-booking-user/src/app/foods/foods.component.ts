import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  constructor(private active: ActivatedRoute, private fs: FoodService , private router: Router) { }
  foods=[]
  ngOnInit(): void {
    this.active.url.subscribe((res)=>{
      if(res)
      {
        var catId = res[1].path;
        this.fs.getFoodsByCatId(catId)
          .subscribe((res,err)=>{
            if(err)
              console.log(err);
            else{
              this.foods=res;
              console.log(this.foods);
              this.loadImages(0);
            }
          })
      }
    })
  }

  loadImages(i) {
    if (!this.foods[i].image) {
      console.log('skip' + i);
      this.foods[i].imageDataUrl = '';
      i += 1
      if (i < this.foods.length)
        this.loadImages(i)
      return
    }

    this.fs.getImage(this.foods[i].image)
      .subscribe(res => {
        this.foods[i].imageDataUrl = 'data:image/jpg;base64,' + res.data;
        i += 1;
        if (i < this.foods.length)
          this.loadImages(i)
      }, err => {
        console.log(err);
      })
  }

  placeOrder(foodId){
    this.router.navigate([`placeorder/${foodId}`]);
  }

}
