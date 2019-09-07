import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  response:any;
  constructor(private http:HttpClient) { }

  getResponse(api:String){
    this.http.get(this.getBaseUrl()+api).subscribe((response)=>{this.response=response;});
      
  return this.response}
  getBaseUrl(){
    return 'http://localhost:9000/writenow/';
  }
}
