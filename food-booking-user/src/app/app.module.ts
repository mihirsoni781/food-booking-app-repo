import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FoodsComponent } from './foods/foods.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {TokenInterceptorService} from './token-interceptor.service';
import { AuthService } from './auth.service';
import { FoodService } from './food.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    PlaceorderComponent,
    OrderhistoryComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,FoodService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
