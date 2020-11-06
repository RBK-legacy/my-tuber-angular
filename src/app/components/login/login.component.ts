import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  driver = {
    email: '',
    password: '',
  };
  constructor(private driverService: DriverService) {}

  ngOnInit(): void {}
  save() {
    const data = {
      email: this.driver.email,
      password: this.driver.password,
    };
    console.log(data);
    this.driverService.createLogin(data).subscribe((res) => console.log(res));
  }
}
