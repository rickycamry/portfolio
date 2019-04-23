import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
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
import { TOASTR_TOKEN,Toastr } from './core/interfaces/toastr';
import { ProfileComponent } from './profile/profile.component';
import { BookListComponent } from './book/list/book-list.component';

let toastr:Toastr=window['toastr'];

@NgModule({
  declarations: [
    LibraryAppComponent,
    NavMenuComponent,
    BreadcrumbComponent,
    BookListComponent,
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
    HtppInterceptorModule
  ],
  providers: [
    {provide:TOASTR_TOKEN, useValue:toastr}
  ],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
