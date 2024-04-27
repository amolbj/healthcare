import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicinesHomeComponent } from './components/medicines-home/medicines-home.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { ViewoneproductComponent } from './components/viewoneproduct/viewoneproduct.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'medicine',component:MedicinesHomeComponent},
  {path:'product/:id', component:ViewoneproductComponent},
  {path:'otcCategory',component:ProductByCategoryComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
