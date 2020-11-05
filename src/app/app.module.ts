import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from'@angular/common/http'
import {AgmCoreModule} from '@agm/core'
import { ComponentInformationComponent } from './component-information/component-information.component';

@NgModule({
  declarations: [
    AppComponent,

    ComponentInformationComponent

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM"
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
