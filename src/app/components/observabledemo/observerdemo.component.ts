import {Component} from '@angular/core';
import { ObserveDataService} from "../../services/observedata.service";

@Component({
    selector:'observedemo',
    template:
    `
    <h1>Hello Observable</h1>
    <ul class="list-group">

        <li class="list-group-item" *ngFor="let d of data ">{{d}}</li>

    </ul>
    `
})

export class ObserveDemoComponent{
   data:any[]=[];
    
    constructor(public dataService:ObserveDataService){
        this.dataService.getData().subscribe(data=>{
          this.data.push(data);
        });
    }

    save(){
       
    }
}