import { Component, OnInit } from '@angular/core';


import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGoogle=faGoogle;

  constructor() {}

  ngOnInit(): void {
    document.body.className = "selector";
  }

  ngOnDestroy(){
    document.body.className="";
  }
  
}
