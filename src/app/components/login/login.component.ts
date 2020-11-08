import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  driver = {
    email: '',
    password: '',
    responseToTheUser:'',
    errorMessage:''
  };
  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
  save() {
    const data = {
      email: this.driver.email,
      password: this.driver.password,
    };
    console.log(data);
    this.driverService.createLogin(data).subscribe((res) => {
      if (res.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: `this user are not exist`,
        });
      } else if (res.status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: `password wrong`,
        });
      } else {
      console.log(res);
      window.localStorage.setItem("token",res.token);
      window.localStorage.setItem("id",res.id);
      console.log(window.localStorage)
      this.router.navigate(['/information']);
    }});
  }
}
