import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { MapsService } from '../maps.service';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  form: FormGroup;
  orders = [];
  value='';

  
  lat: string='';
  lng: string='';
  location:Object;
  constructor(private formBuilder: FormBuilder, private map: MapsService) {
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
      { id: '2', name: 'Confort car' },
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
}