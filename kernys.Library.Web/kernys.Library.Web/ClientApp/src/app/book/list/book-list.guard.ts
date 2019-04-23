import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../../security/security.service';

@Injectable({
    providedIn:'root'
})
export class BookListGuard implements CanActivate{
    

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