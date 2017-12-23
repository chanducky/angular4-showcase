import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule,Routes } from "@angular/router";


import { AppComponent } from './app.component';
import {SandboxComponent} from './components/sandbox/sandbox.component';
import {UserComponent} from './components/user/user.component';
import {HttpDemoComponent} from './components/httpdemo/httpdemo.component';

import {  ObserveDemoComponent} from "./components/observabledemo/observerdemo.component";
import { HttpModule } from "@angular/http";

import { DataService} from "./services/data.service";
import { ObserveDataService} from "./services/observedata.service";
import { HttpDataService} from "./services/httpdata.service";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { constants } from 'os';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoutes:Routes= [
  {path:'',component:HomeComponent},
  {path:'httpdemo',component:HttpDemoComponent},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'user',component:UserDetailsComponent},
  {path:'observedemo',component:ObserveDemoComponent},
  {path:'about',component:AboutComponent},
  {path:'form',component:UserComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    UserComponent,
    ObserveDemoComponent,
    HttpDemoComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    ObserveDataService,
    HttpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
