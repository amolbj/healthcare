import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent {

  pin!:string;
  city!:string;

  @ViewChild('pinInput')
  myInput!:ElementRef

  constructor(private pinService:HttpService){
    
  }

  getCity(){
    this.pinService.getCityPin(this.pin).pipe(debounceTime(10000),distinctUntilChanged(),).subscribe({
      next:(response)=>{
        this.city = response[0].cityname
         console.log(response);
         console.log(this.city);
    
      },
      error:(error)=>{
       console.log(error);
      }
    })
    
    

  }
}
