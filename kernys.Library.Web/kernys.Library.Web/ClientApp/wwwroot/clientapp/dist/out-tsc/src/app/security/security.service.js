import * as tslib_1 from "tslib";
import { Injectable, Inject, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SecurityService = /** @class */ (function () {
    function SecurityService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.authValue = 'authValue';
        this.authEmitter = new EventEmitter();
    }
    SecurityService.prototype.login = function (login) {
        var url = this.baseUrl + 'api/account/login';
        return this.http.post(url, login);
    };
    SecurityService.prototype.logOut = function () {
        var url = this.baseUrl + 'api/account/LogOut';
        return this.http.delete(url);
    };
    SecurityService.prototype.signUp = function (signUp) {
        var url = this.baseUrl + 'api/account/signUP';
        return this.http.post(url, signUp);
    };
    SecurityService.prototype.saveAuth = function (auth) {
        this.removeAuth();
        localStorage.setItem(this.authValue, JSON.stringify(auth));
    };
    SecurityService.prototype.removeAuth = function () {
        localStorage.removeItem(this.authValue);
        this.authEmitter.emit(null);
    };
    SecurityService.prototype.getAuth = function () {
        var value = localStorage.getItem(this.authValue);
        var a = value ? JSON.parse(value) : null;
        //emitter to update the navbar 
        this.authEmitter.emit(a);
        return a;
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], SecurityService.prototype, "authEmitter", void 0);
    SecurityService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], SecurityService);
    return SecurityService;
}());
export { SecurityService };
//# sourceMappingURL=security.service.js.map