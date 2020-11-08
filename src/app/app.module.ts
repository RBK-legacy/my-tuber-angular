import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from'@angular/common/http'
import {AgmCoreModule} from '@agm/core'
import { ComponentInformationComponent } from './component-information/component-information.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentInformationComponent,
    SignupComponent,
    LoginComponent,

    HomeComponent, 
    ComponentInformationComponent, AboutUsComponent,
    UserComponent

  ],

  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path: 'user', component: UserComponent},
                          {path: '', component:HomeComponent},
                          {path: 'logIn', component: LoginComponent},
                          {path: 'signUp', component: SignupComponent},
                          {path: 'information', component: ComponentInformationComponent },
                          {path: 'AboutUs', component: AboutUsComponent }]),



    AgmCoreModule.forRoot({

      apiKey:"AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM"


    
    
    // AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM
    })],
  providers: [],
  bootstrap: [AppComponent,HomeComponent],
})

export class AppModule { }



