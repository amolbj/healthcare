import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:3000/";
  headers:HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })
  getDataFromServer(endPoint:String,params:HttpParams = new HttpParams()){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.headers,params:params})
  }
  getCityPin(pin:string){
     const url=`${this.baseUrl}cities?pincode=${pin}`
    return this.http.get<any[]>(url)
  }
  getOneProduct(endPoint:string,drugcode:number):Observable<any>{
    const url=`${this.baseUrl}${endPoint}?drugCode=${drugcode}`
    console.log(url);
    return this.http.get<any[]>(url);
  }
  
}
