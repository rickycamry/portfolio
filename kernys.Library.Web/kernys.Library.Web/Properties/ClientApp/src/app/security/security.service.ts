import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../core/interfaces/login';
import { Observable } from 'rxjs';
import { Auth } from './Auth';
import { SignUp } from '../core/interfaces/sign-up';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
    providedIn:'root'
})
export class SecurityService{

    authValue:string='authValue';
    @Output() authEmitter:EventEmitter<Auth>=new EventEmitter();


  constructor(private http:HttpClient, 
              @Inject('BASE_URL') private baseUrl:string) {
                 

  }


   login(login:Login):Observable<Auth>{
     
    let url=this.baseUrl+'api/account/login';
    return this.http.post<Auth>(url,login);
   }


   logOut(){
       let url=this.baseUrl+'api/account/LogOut';

       return this.http.delete(url);
   }


   signUp(signUp:SignUp):Observable<any>{
     
    let url=this.baseUrl+'api/account/signUP';

    return this.http.post<any>(url,signUp);
    
   }

   


   saveAuth(auth:Auth):void{
       
    this.removeAuth();

    localStorage.setItem(this.authValue,
        JSON.stringify(auth));
    }

removeAuth():void{
    
    localStorage.removeItem(this.authValue);
    this.authEmitter.emit(null);
}

getAuth():Auth{
    let value=localStorage.getItem(this.authValue);
    let a=value?JSON.parse(value):null;
    //emitter to update the navbar 
      this.authEmitter.emit(a);
    return a;
    
}


  








}
