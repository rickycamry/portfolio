import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BookService } from "./book.service";
var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (x) {
            _this.books = x;
        });
    };
    BookListComponent.prototype.handleDetail = function (b) {
        this.route.navigate(['/book/', b.Id]);
    };
    BookListComponent = tslib_1.__decorate([
        Component({
            selector: 'books',
            templateUrl: 'book-list.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BookService,
            Router])
    ], BookListComponent);
    return BookListComponent;
}());
export { BookListComponent };
//# sourceMappingURL=book-list.component.js.map