import { Routes } from '@angular/router';

import { BookDetailComponent } from './detail/book-detail.component';
import { BookDetailGuard } from './detail/book-detail.guard';
import { BookEditComponent } from './edit/book-edit.component';
import { BookListComponent } from './list/book-list.component';
import { BookListGuard } from './list/book-list.guard';

export const BookRoutes:Routes=[
   
     { path: '', component:BookListComponent , data: {breadcrumb: 'Books' } },

     


 

    { path:'book/create',  component:BookEditComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Edit' } },
    { path:'edit/:id',  component:BookEditComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Edit' } },
    { path:'book/:id',  component:BookDetailComponent, data:{breadcrumb: 'Details' } },

];