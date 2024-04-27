import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-viewoneproduct',
  templateUrl: './viewoneproduct.component.html',
  styleUrls: ['./viewoneproduct.component.scss']
})
export class ViewoneproductComponent implements OnInit {

  drugcode!:number;
  product!:any;

  constructor(private http:HttpService, private router:Router,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.drugcode = param['id']
      console.log(param['id']);
      console.log(this.drugcode);
    })


    this.http.getOneProduct('top-deals',this.drugcode).subscribe({
      next:(response:any)=>{
           if(response){
            this.product = response[0]
            console.log(response);
           }

      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{

      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
