import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BookService } from "../book.service";
import { ActivatedRoute } from "@angular/router";
var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(bookService, actRoute) {
        this.bookService = bookService;
        this.actRoute = actRoute;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = +this.actRoute.snapshot.params["id"];
        this.bookService.getBook(bookId).subscribe(function (x) {
            return _this.book = x;
        });
    };
    BookDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: './book-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [BookService,
            ActivatedRoute])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
export { BookDetailComponent };
//# sourceMappingURL=book-detail.component.js.map