import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
var BookService = /** @class */ (function () {
    function BookService(http, baseURl) {
        this.http = http;
        this.baseURl = baseURl;
        this.baseURl += 'api/book';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.baseURl);
    };
    BookService.prototype.getUserBooks = function () {
        var url = this.baseURl + '/userbooks';
        return this.http.get(url);
    };
    BookService.prototype.getUserBook = function (bookId) {
        var url = this.baseURl + '/userbook/' + bookId;
        return this.http.get(url);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.baseURl + '/' + id;
        return this.http.get(url);
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.baseURl, book);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.baseURl, book);
    };
    BookService.prototype.deleteBook = function (bookId) {
        return this.http.delete(this.baseURl + '/' + bookId);
    };
    BookService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], BookService);
    return BookService;
}());
export { BookService };
//# sourceMappingURL=book.service.js.map