import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {
  topDetalsByCategory:any;
  constructor(private http:HttpService){

  }
  ngOnInit(): void {
    this.getProductDetlsByCategory();
  }

  getProductDetlsByCategory() {
    this.http.getDataFromServer('top-deals-by-category').subscribe({
      next:(response:any)=>{
         if(response && response.length > 0){
           this.topDetalsByCategory = response;
         }
      },

      error:(error:any)=>{

      }
    })
  }


 
}
