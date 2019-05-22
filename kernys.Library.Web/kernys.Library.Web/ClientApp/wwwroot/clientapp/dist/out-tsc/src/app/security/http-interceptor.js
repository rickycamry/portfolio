import * as tslib_1 from "tslib";
import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityService } from './security.service';
var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(securityService) {
        this.securityService = securityService;
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        var auth = this.securityService.getAuth();
        if (auth) {
            var newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + auth.Token)
            });
            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    };
    HttpRequestInterceptor = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [SecurityService])
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());
export { HttpRequestInterceptor };
var HtppInterceptorModule = /** @class */ (function () {
    function HtppInterceptorModule() {
    }
    HtppInterceptorModule = tslib_1.__decorate([
        NgModule({
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpRequestInterceptor,
                    multi: true //Multiple instance of this are allow
                }
            ]
        })
    ], HtppInterceptorModule);
    return HtppInterceptorModule;
}());
export { HtppInterceptorModule };
//# sourceMappingURL=http-interceptor.js.map