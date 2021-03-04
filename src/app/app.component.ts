import { Component } from '@angular/core';
import {SapiService} from "./sapi.service"  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'envy';
  book:any[]
  constructor(private appservice:SapiService){
    this.book=[]
   this.appservice.getData().subscribe (data=>{
     console.log(data)
     this.book=data
   })
  }
}
