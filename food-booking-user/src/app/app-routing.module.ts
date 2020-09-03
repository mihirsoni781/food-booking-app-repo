import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about-us',
    component: AboutusComponent
  },
  {
    path: 'foods/:catId',
    component: FoodsComponent
  },
  {
    path: 'placeorder/:orderId',
    component: PlaceorderComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'orderhistory',
    component: OrderhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
