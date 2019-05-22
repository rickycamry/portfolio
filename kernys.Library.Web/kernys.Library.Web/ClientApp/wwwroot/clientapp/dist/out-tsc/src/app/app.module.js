import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LibraryAppComponent } from './library-app.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { LibraryRoutes } from './library-app.routes';
//
import { NotFoundComponent } from './error/404';
import { UtilitiesModule } from './utilies/utilies.module';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { LoginComponent } from './security/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HtppInterceptorModule } from './security/http-interceptor';
import { LogoutComponent } from './security/login/logout.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { TOASTR_TOKEN } from './core/interfaces/toastr';
import { JQUERY_TOKEN } from './core/interfaces/jquery';
import { ProfileComponent } from './profile/profile.component';
import { BookModule } from './book/book.module';
var toastr = window['toastr'];
var jQuery = window['$'];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                LibraryAppComponent,
                NavMenuComponent,
                BreadcrumbComponent,
                NotFoundComponent,
                LoginComponent,
                LogoutComponent,
                SignUpComponent,
                ProfileComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                UtilitiesModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule.forRoot(LibraryRoutes),
                HtppInterceptorModule,
                BookModule
            ],
            providers: [
                { provide: TOASTR_TOKEN, useValue: toastr },
                { provide: JQUERY_TOKEN, useValue: jQuery }
            ],
            exports: [],
            bootstrap: [LibraryAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map