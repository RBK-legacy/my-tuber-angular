import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'app-type',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  @Input() timeLengthInput: any;
  @Input() distanceInput: any;
  BaseCarPrice: any;
  HighEndCarPrice: any;
  PremiumCarPrice: any;

  constructor() {}
  ngOnInit() {
    
   }
}