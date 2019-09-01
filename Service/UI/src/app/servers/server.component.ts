import { Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user.model';

@Component({
    selector:'app-server',
    template:'<app-sub-server>',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    @Input('userObj') userObj=new User();
    collapse:boolean=false;
    date: String=new Date().toDateString();

    constructor(){
setInterval(()=>{
    let currentDate= new Date();
    this.date=currentDate.toDateString() + ' '+ currentDate.toLocaleTimeString();
},1000);


    }

    collapseIt(){
  this.collapse=!this.collapse;
     
    }

}