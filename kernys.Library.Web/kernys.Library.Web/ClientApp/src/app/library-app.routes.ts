import { Routes } from '@angular/router';
import { BookListComponent } from './book/list/book-list.component';
import { NotFoundComponent } from './error/404';
import { LoginComponent } from './security/login/login.component';
import { LogoutComponent } from './security/login/logout.component';

import { SignUpComponent } from './security/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { BookListGuard } from './book/list/book-list.guard';

export const LibraryRoutes:Routes=[

    { path: '', component: BookListComponent, pathMatch: 'full',canActivate:[BookListGuard] , data: {breadcrumb: 'Books' } },
    { path:'books',  component:BookListComponent, canActivate:[BookListGuard] ,data: {breadcrumb: 'Books' }},
    { path:'book', loadChildren: './book/book.module#BookModule', data: {breadcrumb: 'Book' } },
    { path:'authors', loadChildren: './author/author.module#AuthorModule', data: {breadcrumb: 'Authors' } },
    { path:'author', loadChildren: './author/author.module#AuthorModule' , data: {breadcrumb: 'Author' }},
    { path:'profile',  component:ProfileComponent},
    


    { path:'404',  component:NotFoundComponent},
    { path:'account/logout',  component:LogoutComponent},
    { path:'account/login',  component:LoginComponent, data: {breadcrumb: 'Login' }},
    { path:'account/signup',  component:SignUpComponent, data: {breadcrumb: 'Sign up' }},



  //  { path:'',  redirectTo:'home', pathMatch:'full'},
  //  { path:'**', redirectTo:'home',pathMatch:'full'}



];