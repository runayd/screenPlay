import { Component } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { User } from './servers/user.model';



@Component({      //this component(decorator) is decorating the below class
  selector: 'app-root',
  templateUrl: './app.component.html',   
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  patientid=1234;
  url="http://localhost:8091/pay?patientid="+this.patientid;
  ServerName:String=null;
  ServerPID:number =11;
  ServerStatus:String= 'offline';
  statusFlag:boolean=false;
  buttonState:boolean=true;
  response:any;
  endpoint: any;
  user:User;
constructor(private http:HttpClient){
  this.user=new User();
  setTimeout(()=>{this.buttonState=false;},2000);
  this.user.name="Runay Ramdas Dhaygude";
  this.user.add="satara, Maharashtra";
  this.user.phone="runaydhaygude97@gmail.com";

}
getPayment() {
  this.http.get(`${this.url}`);
}




}

