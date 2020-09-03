import { Component, OnInit } from '@angular/core';
import { AdminService} from '../../admin.service';
import {NgForm} from '@angular/forms';
import { FormStyle } from '@angular/common';
import { ReadVarExpr } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  add=null;
  constructor(private as : AdminService, private router: Router) { }
  cats= []
  foods=[]
  ngOnInit(): void {
    this.as.getAllFoods()
      .subscribe(res=>{
        console.log(res);
        if(!res.length)
          return
        this.foods = res;
        this.loadImages(0);
      },err=>{
        if(err.error.access==0){
          this.router.navigate(['/signin'])
        }
      })
    this.as.getAllCat()
      .subscribe(res=>{
        console.log(res)
        this.cats = res;
      },err=>{
          if (err.error.access == 0) {
            this.router.navigate(['/signin'])
          }
      })
  }

  addFood(f,event){
    console.log(f)
    var fd = new FormData()
    fd.append('name', f.name)
    fd.append('description', f.desc)
    fd.append('cost', f.cost)
    fd.append('catId', f.cat)

    if (event.target[4].files.length)
      fd.append('file', event.target[4].files[0])

    this.as.addFood(fd)
      .subscribe(
        res=>{
          console.log(res);
          this.foods.push(res);
          this.add=0;
          this.loadImages(this.foods.length-1);          
        },
        err=>{

          if (err.error.access == 0) {
            this.router.navigate(['/signin'])
          }
        }
      )
  }
  

  loadImages(i) {
    if (!this.foods[i].image)
    {
      console.log('skip'+i);
      this.foods[i].imageDataUrl = '';
      i+=1
      if(i<this.foods.length)
        this.loadImages(i)
      return
    }
    
    this.as.getImageById(this.foods[i].image)
      .subscribe(res => {
        this.foods[i].imageDataUrl = 'data:image/jpg;base64,'+res.data;
        i += 1;
        if (i < this.foods.length)
          this.loadImages(i)
      }, err => {

          if (err.error.access == 0) {
            this.router.navigate(['/signin'])
          }
          
      })
  }

  deleteFood(idx)
  {
    if(!confirm('Confirm deleting ?'))
      return
    this.as.deleteFood(this.foods[idx]._id)
      .subscribe((res,err)=>{
        if(err)
          console.log(err);
        else  
          console.log(res);
      })

      this.foods.splice(idx,1);
  }

  tmpFood = null;
  tmpFoodIdx = null;

  editFood(idx){  
    this.tmpFoodIdx = idx;
    this.tmpFood = JSON.parse(JSON.stringify(this.foods[idx]))
  }

  updateFood(event)
  { 
    this.tmpFood.imageDataUrl = null;

    var fd = new FormData()

    console.log(this.tmpFood);
    fd.append('_id',this.tmpFood._id);
    fd.append('name', this.tmpFood.name)
    fd.append('description', this.tmpFood.description)
    fd.append('cost', this.tmpFood.cost)
    fd.append('catId', this.tmpFood.catId)

    if(this.tmpFood.image)
      fd.append('image',this.tmpFood.image)

    console.log(event);
    
    if (event.target[4].files.length){
      console.log('fileaddedtoformdata');
      fd.append('file', event.target[4].files[0])
    }
        
    this.as.updateFood(fd,this.tmpFood._id)
      .subscribe((res,err)=>{
        if(err)
        {
          console.log(err);
          
          if (err.error.access == 0) {
            this.router.navigate(['/signin'])
          }
        }
        else{
          this.foods[this.tmpFoodIdx] = res;
          if(res.image)
            this.loadImages(this.tmpFoodIdx);
          this.tmpFood=null;
        }
      })

  }

  preview(event)
  {
    let fr = new FileReader()
    fr.readAsDataURL(event.target.files[0])
    fr.onload = ()=>{
      this.tmpFood.imageDataUrl = fr.result;
    }
    
  }

  getCat(catId){

    for(let i of this.cats){
      if(i._id==catId){
        return i.name;
      }
    }
  }

}
