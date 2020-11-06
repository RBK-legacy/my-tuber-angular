import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from "./home/home.component"
const routes: Routes = [
  {path: 'home', component:HomeComponent}
  // {path: 'find', component:findDriver}
  // {path: 'aboutUs', component:aboutUs}
  // {path: 'joinUs', component:joinUs}
];

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
