import * as tslib_1 from "tslib";
import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
var AuthorService = /** @class */ (function () {
    function AuthorService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl + 'api/author';
    }
    AuthorService.prototype.getAuthors = function () {
        return this.http.get(this.url);
    };
    AuthorService.prototype.getAuthor = function (id) {
        var newUrl = this.url + '/' + id;
        return this.http.get(newUrl);
    };
    AuthorService.prototype.postAuthor = function (author) {
        return this.http.post(this.url, author);
    };
    AuthorService.prototype.putAuthor = function (author) {
        return this.http.put(this.url, author);
    };
    AuthorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], AuthorService);
    return AuthorService;
}());
export { AuthorService };
//# sourceMappingURL=author.service.js.map