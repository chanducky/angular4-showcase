import { Injectable } from "@angular/core";
import { Observable} from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpDataService{
    
    constructor(public http:Http){
    
    }

    getData(){
        return this.http.get('http://jsonplaceholder.typicode.com/users')
        .map(res=>res.json());
    }
}