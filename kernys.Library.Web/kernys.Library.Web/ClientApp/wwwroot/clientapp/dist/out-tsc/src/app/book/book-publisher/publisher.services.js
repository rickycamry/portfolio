import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PublisherService = /** @class */ (function () {
    function PublisherService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.baseUrl += 'api/publisher';
    }
    PublisherService.prototype.getPublishers = function () {
        return this.http.get(this.baseUrl);
    };
    PublisherService.prototype.getPublisherByBookId = function (bookId) {
        return this.http.get(this.baseUrl + ("/" + bookId));
    };
    PublisherService.prototype.addPublisher = function (publisher, bookId) {
        return this.http.post(this.baseUrl + ("/" + bookId), publisher);
    };
    PublisherService.prototype.updatePublisher = function (publisher, bookId) {
        return this.http.put(this.baseUrl + ("/" + bookId), publisher);
    };
    PublisherService.prototype.deletePublisher = function (bookId, publisherId) {
        return this.http.delete(this.baseUrl + ("/" + publisherId + "/" + bookId));
    };
    PublisherService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], PublisherService);
    return PublisherService;
}());
export { PublisherService };
//# sourceMappingURL=publisher.services.js.map