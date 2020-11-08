import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-component-information',
  templateUrl: './component-information.component.html',
  styleUrls: ['./component-information.component.css']
})
export class ComponentInformationComponent {
//lagitude //longitude
  lat: string='';
  lng: string='';
  location:Object;
 obj = {request : "accept"}
 obj1={request : "do not accept"}


  constructor(private map: MapsService, private driverService :  DriverService) { }
show: boolean = false;

  ngOnInit() {
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat=data.latitude;
      this.lng= data.longitude;
    })
  }
   
  driverRequest(event: any){//we use this fn on click to send req.body.request to the server
    this.obj.request ="accept";
    this.driverService.request(this.obj);

  }
  
driverRequest1(event: any){//we use this fn on click to send req.body.request to the server
  this.obj1.request =" do not accept";
    this.driverService.request(this.obj1);

}
onClick(event){
  this.show = true;
}

onClick1(event){
  this.show = false;
}

}
