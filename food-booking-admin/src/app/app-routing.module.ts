import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { BookingsComponent } from './adminhome/bookings/bookings.component';
import { CategoriesComponent } from './adminhome/categories/categories.component';
import { CustomersComponent } from './adminhome/customers/customers.component';
import { FoodsComponent } from './adminhome/foods/foods.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddfoodComponent } from './adminhome/addfood/addfood.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo:'signin'},
  {path:'signin', component: SigninComponent},
  {
    path: 'admin', component: AdminhomeComponent, children: [
      { path: 'bookings', component: BookingsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'foods', component: FoodsComponent },
      { path: 'addfood', component: AddfoodComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
