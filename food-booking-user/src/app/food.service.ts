import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  prefix = 'http://localhost:5000'
  getAllCatUrl = '/foods/getAllCat'
  getFoodsByCatIdUrl = '/foods/getFoodsByCatId/'

  constructor(private http: HttpClient) { }
  getAllCat(){
    return <any>this.http.get(this.prefix +this.getAllCatUrl)
  }

  getFoodsByCatId(catId){
    return <any>this.http.get(this.prefix +this.getFoodsByCatIdUrl+catId);
  }

  getImage(id){
    return <any>this.http.get(this.prefix +'/files/getImage/'+id);
  }

  getFoodById(fid){
    return <any>this.http.get(this.prefix +'/foods/getFoodById/'+fid)
  }

  placeOrder(order){
    return <any>this.http.post(this.prefix +'/order/placeOrder',order);
  }
}
