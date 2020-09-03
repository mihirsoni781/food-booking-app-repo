import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CategoriesComponent } from './adminhome/categories/categories.component';
import { FoodsComponent } from './adminhome/foods/foods.component';
import { CustomersComponent } from './adminhome/customers/customers.component';
import { BookingsComponent } from './adminhome/bookings/bookings.component';
import {FormsModule} from '@angular/forms';
import { AddfoodComponent } from './adminhome/addfood/addfood.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminAuthService } from './admin-auth.service';
import {TokenInterceptorService} from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminhomeComponent,
    CategoriesComponent,
    FoodsComponent,
    CustomersComponent,
    BookingsComponent,
    AddfoodComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdminAuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
