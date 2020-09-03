import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  cats=[]
  catToAdd = ""
  edit=null
  constructor(private as : AdminService) { }

  ngOnInit(): void {
    this.as.getAllCat()
      .subscribe(res=>{
        this.cats = res;
        console.log(res);
        this.cats.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      },err=>{
        console.log(err)
      })
  
  }
  addCat(){
    this.as.addCat(this.catToAdd)
      .subscribe(res=>{
        console.log(res);
        this.cats.push(res)
        this.cats.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      },err=>{
        console.log(err)
      })
      this.catToAdd=""
  }

  removeCat(idx)
  { 
    var x = window.confirm('Confirm deleting ?')
    if(!x)
    {
      return
    }

    this.as.deleteCat(this.cats[idx]._id)
    .subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
    this.cats.splice(idx,1);
    this.cats.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

  }


  saveCat(idx,newName){
    this.cats[idx].name = newName.value;
    this.as.updateCat(this.cats[idx])
      .subscribe(res=>{
        console.log(res)
      },err=>{
        console.log(err);
        
      })
    this.edit=null
    this.cats.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
  }

}
