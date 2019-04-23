import { Routes } from '@angular/router';

import { BookDetailComponent } from './detail/book-detail.component';
import { BookDetailGuard } from './detail/book-detail.guard';
import { BookCreateComponent } from './create/book-create.component';

export const BookRoutes:Routes=[
    { path:'create',  component:BookCreateComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Create' } },
    { path:':id',  component:BookDetailComponent, canActivate:[BookDetailGuard], data:{breadcrumb: 'Details' } },

];