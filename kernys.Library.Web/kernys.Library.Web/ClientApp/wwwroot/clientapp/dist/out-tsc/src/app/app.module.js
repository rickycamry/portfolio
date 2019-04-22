import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LibraryAppComponent } from './library-app.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { LibraryRoutes } from './library-app.routes';
import { BookListComponent } from './book/book-list.component';
import { NotFoundComponent } from './error/404';
import { UtilitiesModule } from './utilies/utilies.module';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                LibraryAppComponent,
                NavMenuComponent,
                BreadcrumbComponent,
                BookListComponent,
                NotFoundComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                UtilitiesModule,
                RouterModule.forRoot(LibraryRoutes)
            ],
            providers: [],
            bootstrap: [LibraryAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map