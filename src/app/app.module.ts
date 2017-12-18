import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {SandboxComponent} from './components/sandbox/sandbox.component';
import {UserComponent} from './components/user/user.component';
import {HttpDemoComponent} from './components/httpdemo/httpdemo.component';

import {  ObserveDemoComponent} from "./components/observabledemo/observerdemo.component";
import { HttpModule } from "@angular/http";

import { DataService} from "./services/data.service";
import { ObserveDataService} from "./services/observedata.service";
import { HttpDataService} from "./services/httpdata.service";



@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    UserComponent,
    ObserveDemoComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    ObserveDataService,
    HttpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
