import { Component } from '@angular/core';
import {Router}  from '@angular/router'
// import {HomeComponent} from "src/app/home/home.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // myImage: string = "assets/images/car1.png "
constructor(private route : Router){}
  refresh(event){
  this.route.navigate([''])
  }
}
