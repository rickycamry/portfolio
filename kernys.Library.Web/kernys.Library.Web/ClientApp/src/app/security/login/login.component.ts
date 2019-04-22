import { Component, Inject } from '@angular/core';
import { Login } from 'src/app/core/interfaces/login';
import { SecurityService } from '../security.service';
import { Auth } from '../Auth';
import { Router } from '@angular/router';
import { BaseForm } from 'src/app/core/baseForm';
import { TOASTR_TOKEN, Toastr } from 'src/app/core/interfaces/toastr';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { catchError } from 'rxjs/operators';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseForm {

    login: Login = <Login>{};
    auth=new Auth();
    errorMessage:string;

    constructor(private securityService: SecurityService, private router:Router,
        @Inject(TOASTR_TOKEN)  toastr:Toastr) {
            super(toastr);

    }


    onLogin() {


        this.securityService.login(this.login).subscribe(resp=>{ 
            
            this.securityService.saveAuth(resp);
            this.router.navigate(["books"]);
        }, error=>{
          this.handlerError(error);
       

        });
        
        

    }


}