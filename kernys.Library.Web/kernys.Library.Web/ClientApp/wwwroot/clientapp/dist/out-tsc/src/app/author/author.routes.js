import { AuthorListComponent } from "./author-list.component";
import { AuthorDetailsComponent } from './author-details.component';
export var authorRoutes = [
    { path: '', component: AuthorListComponent, data: { breadcrumb: '' } },
    { path: ':id', component: AuthorDetailsComponent, data: { breadcrumb: 'Details' } },
];
//# sourceMappingURL=author.routes.js.map