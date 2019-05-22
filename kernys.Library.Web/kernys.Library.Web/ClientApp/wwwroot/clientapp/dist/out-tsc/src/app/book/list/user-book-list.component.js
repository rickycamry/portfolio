import * as tslib_1 from "tslib";
import { Component, Inject, Input } from '@angular/core';
import { BookService } from '../book.service';
import { TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
var UserBookListComponent = /** @class */ (function () {
    function UserBookListComponent(bookService, toastr) {
        this.bookService = bookService;
        this.toastr = toastr;
        this.isProfile = false;
    }
    UserBookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getUserBooks().subscribe(function (books) {
            _this.books = books;
        }, function (error) {
            _this.toastr.error(error.error);
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], UserBookListComponent.prototype, "isProfile", void 0);
    UserBookListComponent = tslib_1.__decorate([
        Component({
            selector: 'user-book-list',
            template: "\n    <h2> Your list of books </h2>\n    <br/>\n    <button type=\"button\" [routerLink]=\"['/book/create']\" class=\"btn btn-primary btn-sm\">Add new book</button>\n    <br/>\n    <br/>\n\n    <div class=\"card-deck\">\n      <div class=\"row\">\n\n       <div class=\"col-4\" *ngFor=\"let b of books\">\n       <book-list-item [book]=\"b\" [isProfile]=\"isProfile\"></book-list-item>\n       </div>\n       </div>\n     </div>\n    "
        }),
        tslib_1.__param(1, Inject(TOASTR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [BookService, Object])
    ], UserBookListComponent);
    return UserBookListComponent;
}());
export { UserBookListComponent };
//# sourceMappingURL=user-book-list.component.js.map