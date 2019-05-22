import { Injectable, NgModule } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SecurityService } from './security.service';
import { NgModel } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {

 constructor(private securityService:SecurityService){

 }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var auth=this.securityService.getAuth();

       
        if (auth) {
            const newReq = req.clone({
                headers: req.headers.set('Authorization',
                    'Bearer ' + auth.Token)
            });
            return next.handle(newReq);

        }else{
            return next.handle(req);
        }

    }
}
@NgModule({
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass:HttpRequestInterceptor,
            multi:true //Multiple instance of this are allow
        }
    ]
})
export class HtppInterceptorModule{

}
