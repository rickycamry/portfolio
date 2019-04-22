import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
var BookService = /** @class */ (function () {
    function BookService(http, baseURl) {
        this.http = http;
        this.baseURl = baseURl;
    }
    BookService.prototype.getBooks = function () {
        var url = this.baseURl + 'api/book';
        return this.http.get(url);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.baseURl + 'api/book/' + id;
        return this.http.get(url);
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