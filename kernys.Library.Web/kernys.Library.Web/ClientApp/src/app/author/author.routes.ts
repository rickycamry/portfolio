import { Routes } from "@angular/router";

import { AuthorListComponent } from "./author-list.component";
import { AuthorDetailsComponent } from './author-details.component';
import { AuthorGuard } from './author.guard';

export const authorRoutes:Routes=[
    
    { path: '',  component: AuthorListComponent, data:{breadcrumb: '' } },
   // { path: 'authors',  component: AuthorListComponent, canActivate:[AuthorGuard], data:{breadcrumb: '' } },

    { path: ':id', component: AuthorDetailsComponent, data:{breadcrumb: 'Details' }},

    
   
    // { path: '', component: AuthorListComponent, pathMatch: 'full' },
]