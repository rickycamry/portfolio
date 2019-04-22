import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookRoutes } from './book.routes';
import { BookDetailComponent } from './book-detail.component';
import { UtilitiesModule } from '../utilies/utilies.module';
var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                BookDetailComponent
            ],
            imports: [
                CommonModule,
                HttpClientModule,
                UtilitiesModule,
                RouterModule.forChild(BookRoutes)
            ]
        })
    ], BookModule);
    return BookModule;
}());
export { BookModule };
//# sourceMappingURL=book.module.js.map