import { Component, OnInit } from '@angular/core';
import {DriverService} from 'src/app/services/driver.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  driver = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    yearOfBirth : '',
    idCard : '',
    driveLicense : '',
    car : '',
    location : '',
    km : ''
  };

  constructor(private driverService : DriverService) { }

  ngOnInit(): void {
  };
  register(){
    const data = {
      firstName : this.driver.firstName,
      lastName : this.driver.lastName,
      email : this.driver.email,
      password : this.driver.password,
      yearOfBirth : this.driver.yearOfBirth,
      idCard : this.driver.idCard,
      driveLicense : this.driver.driveLicense,
      car : this.driver.car,
      location : this.driver.location,
      km : this.driver.km
    }
    console.log(data);
    this.driverService.createRegister(data)
    .subscribe(res => console.log(res))
  };

}
