import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  getAllCatUrl = 'http://localhost:5000/admin/getAllCat';
  addCatUrl = 'http://localhost:5000/admin/addCat';
  delCatUrl = 'http://localhost:5000/admin/deleteCat';
  updateCatUrl = 'http://localhost:5000/admin/updateCat/';
  addFoodUrl = 'http://localhost:5000/admin/addFood';
  getAllFoodsUrl = 'http://localhost:5000/admin/getAllFoods';


  getAllCat(){
    return <any> this.http.get(this.getAllCatUrl);
  }

  addCat(cat){
    return <any> this.http.post(this.addCatUrl,{name: cat});
  }
  deleteCat(catId){
    return <any> this.http.post(this.delCatUrl,{_id: catId});
  }
  updateCat(cat){
    return <any> this.http.put(this.updateCatUrl+cat._id,cat)
  }
  addFood(formdata)
  {
    console.log('servce');
    return <any> this.http.post(this.addFoodUrl,formdata);
  }
  getAllFoods()
  {
    return <any> this.http.get(this.getAllFoodsUrl);
  }
  getImageById(imgId){
    return <any> this.http.get('http://localhost:5000/files/getImage/'+imgId);
  }
  deleteFood(id)
  {
    return <any> this.http.get('http://localhost:5000/admin/removeFood/'+id);
  }
  updateFood(fd,id)
  {
    
    return <any> this.http.post('http://localhost:5000/admin/editFood',fd)
  }

  getAllOrders(){
    return <any> this.http.get('http://localhost:5000/order/getAllOrders')
  }

  getAllCustomers(){
    return <any> this.http.get('http://localhost:5000/admin/getAllCustomers');
  }
  
}
