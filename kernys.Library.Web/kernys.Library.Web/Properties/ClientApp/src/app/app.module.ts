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
import { JQUERY_TOKEN } from './core/interfaces/jquery';

import { ProfileComponent } from './profile/profile.component';
import { BookListComponent } from './book/list/book-list.component';
import { BookModule } from './book/book.module';
import { BookListItemComponent } from './book/list/book-list-item.component';

let toastr:Toastr=window['toastr'];
let jQuery:any=window['$']

@NgModule({
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
    {provide:TOASTR_TOKEN, useValue:toastr},
    {provide:JQUERY_TOKEN, useValue:jQuery}

  ],
  exports:[
  ],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
