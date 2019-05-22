import { Routes } from '@angular/router';
import { NotFoundComponent } from './error/404';
import { LoginComponent } from './security/login/login.component';
import { LogoutComponent } from './security/login/logout.component';

import { SignUpComponent } from './security/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGuard } from './profile/profile.guard';

export const LibraryRoutes:Routes=[

    { path:'profile',  component:ProfileComponent, canActivate:[ProfileGuard]},


    
     
     { path:'book', loadChildren: './book/book.module#BookModule', data: {breadcrumb: 'Book' } },
     { path:'books', loadChildren: './book/book.module#BookModule', data: {breadcrumb: 'Book' } },
 
     { path:'author', loadChildren: './author/author.module#AuthorModule' , data: {breadcrumb: 'Author' }},
     { path:'authors', loadChildren: './author/author.module#AuthorModule', data: {breadcrumb: 'Authors' } },
    



    { path:'404',  component:NotFoundComponent},
    { path:'account/logout',  component:LogoutComponent},
    { path:'account/login',  component:LoginComponent, data: {breadcrumb: 'Login' }},
    { path:'account/signup',  component:SignUpComponent, data: {breadcrumb: 'Sign up' }},
    //{ path:'', loadChildren: './book/book.module#BookModule',  pathMatch:'full', data: {breadcrumb: 'Book' } },




     { path:'',  redirectTo:'books', pathMatch:'full'},
     { path:'**', redirectTo:'404',pathMatch:'full'}



];