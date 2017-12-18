import {Component} from '@angular/core';
import { HttpDataService} from "../../services/httpdata.service";

@Component({
    selector:'httpdemo',
    template:
    `
    <h1>Hello Http calls</h1>
    
    <div *ngFor ="let user of users">
        <ul>
            <li>{{user.id}}</li>
            <li>{{user.name}}</li>
            <li>{{user.email}}</li>
        </ul>
    </div>
    
    `
})

export class HttpDemoComponent{
   users:any[]=[];
    
    constructor(public dataService:HttpDataService){
        this.dataService.getData().subscribe(users=>{
         this.users=users;
        });
    }
}