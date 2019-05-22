import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from '../security/security.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ProfileGuard implements CanActivate{

    constructor(private router:Router, private securityService:SecurityService){

    }

    canActivate(
        next:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
         let isAuthorized:boolean= this.securityService.getAuth()?true:false; 
         
         if(!isAuthorized){
           this.router.navigate(['account/login']);
         }
            return true;
        };


}