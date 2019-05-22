import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/core/interfaces/login';
import { SecurityService } from '../security.service';
import { Auth } from '../Auth';
import { Router } from '@angular/router';


@Component({
    template:''
})
export class LogoutComponent {

    login: Login = <Login>{};
    auth=new Auth();

    constructor(private securityService: SecurityService, private router:Router) {
        this.securityService.logOut().subscribe(
            resp=>{
                this.securityService.removeAuth();
                this.router.navigate(["account/login"]);
            }
        );
        
    }

 
 


}