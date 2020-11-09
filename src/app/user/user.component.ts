import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MapsService } from '../maps.service';
import { of } from 'rxjs';
import  { DriverService } from './../services/driver.service';
import { Router } from '@angular/router';

// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  allInfo: any =[1];
  type: string;
  form: FormGroup;
  orders = [];
  value='';
  lat: string='';
  lng: string='';
  location:Object;
  constructor(private formBuilder: FormBuilder, private map: MapsService,private driverService: DriverService ,private router: Router) {
    this.form = this.formBuilder.group({
      orders: ['']
    });
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });
  }
  getOrders() {
    return [
      { id: '1', name: 'Normal car' },
      { id: '2', name: 'Comfort car' },
      { id: '3', name: 'Safe car' },
    ]
  }
  submit() {
    console.log(this.form.value);
  }
  ngOnInit() {
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat=data.latitude;
      this.lng= data.longitude;
    })
  }

  getType(e){
    this.type = e.target.value
    console.log(this.type)
  }
  sendType(){
    console.log(this.type)
    this.router.navigate(["/driver", { type: this.type }])
    /*
    this.driverService.getCars({type: this.type}).subscribe(info=>{
      this.allInfo = info
      console.log(info)
     
    })
    */
  }
}