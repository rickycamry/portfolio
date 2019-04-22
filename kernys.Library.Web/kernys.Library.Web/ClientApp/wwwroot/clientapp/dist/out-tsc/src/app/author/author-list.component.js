import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorService } from './author.service';
var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(authorService) {
        this.authorService = authorService;
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAuthors().subscribe(function (x) { return _this.authors = x; });
    };
    AuthorListComponent = tslib_1.__decorate([
        Component({
            template: "\n<h1>List of authors</h1>\n \n<div class=\"card mb-3\" *ngFor=\"let a of authors\"  style=\"max-width: 540px;\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-4\">\n      <img [src]=\"a.PhotoUrl\" alt=\"{{a.FirstName}} {{a.LastName}}\">\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{a.FirstName}} {{a.LastName}}</h5>\n        <p class=\"card-text\">{{a.Biography | reduceParagraph:100}}</p>\n      </div>\n    </div>\n\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/author/', a.Id]\">Detail</button>\n\n</div>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [AuthorService])
    ], AuthorListComponent);
    return AuthorListComponent;
}());
export { AuthorListComponent };
//# sourceMappingURL=author-list.component.js.map