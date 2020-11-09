import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';


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

  constructor(private map: MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat=data.latitude;
      this.lng= data.longitude;
    })

  }
}


