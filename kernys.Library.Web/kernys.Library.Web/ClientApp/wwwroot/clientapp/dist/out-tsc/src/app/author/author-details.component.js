import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute } from '@angular/router';
var AuthorDetailsComponent = /** @class */ (function () {
    function AuthorDetailsComponent(authorService, activeRoute) {
        this.authorService = authorService;
        this.activeRoute = activeRoute;
    }
    AuthorDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var authorId = +this.activeRoute.snapshot.params["id"];
        this.authorService.getAuthor(authorId).subscribe(function (x) { return _this.author = x; });
    };
    AuthorDetailsComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'author.details.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthorService,
            ActivatedRoute])
    ], AuthorDetailsComponent);
    return AuthorDetailsComponent;
}());
export { AuthorDetailsComponent };
//# sourceMappingURL=author-details.component.js.map