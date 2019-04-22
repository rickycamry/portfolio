import { Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';
import { BookDetailGuard } from './book-detail.guard';
import { BookCreateComponent } from './book-create.component';

export const BookRoutes:Routes=[
    { path:'create',  component:BookCreateComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Create' } },
    { path:':id',  component:BookDetailComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Details' } },

];