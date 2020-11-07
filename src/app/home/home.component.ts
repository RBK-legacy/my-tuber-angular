import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  faFacebook,
  faTwitter,
  faInstagram
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
  constructor() {}

  ngOnInit(): void {
    document.body.className = "selector";
  }
  ngOnDestroy(){
    document.body.className="";
  }
}
