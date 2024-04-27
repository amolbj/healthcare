import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  displayOtpField:boolean = false;

  constructor(){

  }
  ngOnInit(){

  }
  getOtp(){
    this.displayOtpField = true;
  }
  verifyOtp(){
    this.displayOtpField = false;
  }
}
