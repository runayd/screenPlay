import { Component } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { User } from './servers/user.model';
import { TestService } from './test.service';



@Component({      //this component(decorator) is decorating the below class
  selector: 'app-root',
  templateUrl: './app.component.html',   
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 response:JSON=null;
  inputText:String;
  ServerName:String=null;
  ServerPID:number =11;
  ServerStatus:String= 'offline';
  statusFlag:boolean=false;
  buttonState:boolean=true;
  endpoint: any;
  user:User;
constructor(private http:HttpClient, private test:TestService){
  setTimeout(()=>{this.buttonState=false;},2000);
}
getPayment() {
  this.response=this.test.getResponse(this.inputText);
}
ngonInit(){}
}