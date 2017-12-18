import { Injectable } from "@angular/core";
import { Observable} from "rxjs/Observable";

@Injectable()
export class ObserveDataService{
    data:Observable<Array<any>>
    constructor(){
    
    }

    getData(){
       this.data=new Observable(observer=>{
           setTimeout(() => {
            observer.next(1);
           }, 1000);
           setTimeout(() => {
            observer.next(2);
           }, 2000);
           setTimeout(() => {
            observer.next(3);
           }, 3000);
           setTimeout(() => {
            observer.next('Last');
           }, 4000);
           setTimeout(() => {
            observer.complete();
           }, 4000);
           
       });

       return this.data;
    }
}