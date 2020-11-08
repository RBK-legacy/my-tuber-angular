import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  
  form: FormGroup;
  orders = [];
  value='';

  constructor(private formBuilder: FormBuilder , 

    

) {
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
      
    ];
  }

  submit() {
    console.log(this.form.value);
   
  }

}
