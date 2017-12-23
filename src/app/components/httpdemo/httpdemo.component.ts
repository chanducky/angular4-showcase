import {Component} from '@angular/core';
import { HttpDataService} from "../../services/httpdata.service";

@Component({
    selector:'httpdemo',
   templateUrl:`httpdemo.component.html`
})

export class HttpDemoComponent{
   users:any[]=[];
    user={
        id:'',
        name:'',
        email:'',
        phone:''
    }
    constructor(public dataService:HttpDataService){
        this.dataService.getData().subscribe(users=>{
         this.users=users;
        });
    }

    onSubmit(){
       if(this.user.id!=null && this.user.id!=''){
        console.log(' update user..');
        this.dataService.updateUser(this.user).subscribe(user=>{
            for(let i=0; i<this.users.length;i++){
                if(this.users[i].id==this.user.id){
                    this.users.splice(i,1);
                }
            }

            this.users.unshift(user);
        });
        
       }else{
        console.log(' addd user..');
        this.dataService.addUser(this.user).subscribe(user=>{
            
            this.users.unshift(user);
        });

       }
       
        
        
    }

    onDelete(id){
        this.dataService.deleteUser(id).subscribe(user=>{
            
            console.log('after delete '+JSON.stringify(user));
            for(let i=0; i<this.users.length;i++){
                if(this.users[i].id==id){
                    this.users.splice(i,1);
                }
            }
        });
    }

    onEdit(user){
        this.user=user;
    }


}