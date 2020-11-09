import { Component, OnInit, Input, Injectable } from '@angular/core';
 import  { DriverService } from './../services/driver.service';
 import { UserComponent } from '../user/user.component'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-type',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
@Injectable()
export class DriversComponent implements OnInit {
  allInfos:any = [];
 // @Input() allInfos:any;
  @Input() timeLengthInput: any;
  @Input() distanceInput: any;
  BaseCarPrice: any;
  HighEndCarPrice: any;
  PremiumCarPrice: any;

  constructor(private driverService: DriverService, private userComponent: UserComponent,private router: Router, private route: ActivatedRoute) {
    
  }
  ngOnInit() {

    const type =this.route.snapshot.paramMap.get('type');
    if(!type || type===undefined){
      this.router.navigate(["/user"])
    }
   // this.allInfos = this.userComponent
    console.log(type)
    this.driverService.getCars({type}).subscribe(info=>{
      this.allInfos = info
      console.log(info)
     
    })
   }
}