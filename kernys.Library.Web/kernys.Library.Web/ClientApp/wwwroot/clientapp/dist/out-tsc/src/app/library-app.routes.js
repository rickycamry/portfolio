import { BookListComponent } from './book/book-list.component';
import { NotFoundComponent } from './error/404';
export var LibraryRoutes = [
    { path: '', component: BookListComponent, pathMatch: 'full', data: { breadcrumb: 'Books' } },
    { path: 'books', component: BookListComponent, data: { breadcrumb: 'Books' } },
    { path: 'book', loadChildren: './book/book.module#BookModule', data: { breadcrumb: 'Book' } },
    { path: 'authors', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Authors' } },
    { path: 'author', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Author' } },
    { path: '404', component: NotFoundComponent },
];
//# sourceMappingURL=library-app.routes.js.map