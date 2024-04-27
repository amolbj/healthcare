import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MedicinesHomeComponent } from './components/medicines-home/medicines-home.component';
import { GuardsComponent } from './core/guards/guards.component';
import { InterceptorComponent } from './core/interceptor/interceptor.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PincodeComponent } from './components/pincode/pincode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewoneproductComponent } from './components/viewoneproduct/viewoneproduct.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesHomeComponent,
    GuardsComponent,
    InterceptorComponent,
    ProductByCategoryComponent,
    TopDealsComponent,
    PincodeComponent,
    ViewoneproductComponent,
  
  
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    SharedModule,
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
