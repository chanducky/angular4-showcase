import {Component} from '@angular/core';

@Component({
    selector:'user-form',
    templateUrl:`./user.component.html`,
    styleUrls:[`./user.component.css`]
})

export class UserComponent{
    user={name:'',email:'',phone:''};
    
    save(){
       
    }
}