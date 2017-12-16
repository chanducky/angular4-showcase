import {Component} from '@angular/core';
import { DataService} from "../../services/data.service";

@Component({
    selector:'sandbox',
    // templateUrl:`./sandbox.component.html`,
    styleUrls:[`./sandbox.component.css`],
    template:
    `
    <h1>Hello Observable</h1>
    <ul class="list-group">

        <li class="list-group-item" *ngFor="let d of data ">{{d}}</li>

    </ul>
    `
})

export class SandboxComponent{
   data:any[]=[];
    
    constructor(public dataService:DataService){
        this.dataService.getData().subscribe(data=>{
          this.data.push(data);
        });
    }

    save(){
       
    }
}