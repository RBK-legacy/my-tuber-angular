import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyBMXPq1pAxJSH3_qze7WNe_stCAKcjCdlQ"
    })
//AIzaSyD-vPPQ4Y-W_BkFVxdkD1IOg2db-vdx-rM
    // AIzaSyBMXPq1pAxJSH3_qze7WNe_stCAKcjCdlQ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
