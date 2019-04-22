import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { AuthorListComponent } from "./author-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { authorRoutes } from "./author.routes";
import { HttpClientModule } from "@angular/common/http";
import { AuthorDetailsComponent } from './author-details.component';
import { UtilitiesModule } from '../utilies/utilies.module';
var AuthorModule = /** @class */ (function () {
    function AuthorModule() {
    }
    AuthorModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AuthorListComponent,
                AuthorDetailsComponent
            ],
            imports: [
                CommonModule,
                HttpClientModule,
                UtilitiesModule,
                RouterModule.forChild(authorRoutes)
            ],
            providers: []
        })
    ], AuthorModule);
    return AuthorModule;
}());
export { AuthorModule };
//# sourceMappingURL=author.module.js.map