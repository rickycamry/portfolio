import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { SecurityService } from '../security.service';
import { Auth } from '../Auth';
import { Router } from '@angular/router';
import { BaseForm } from 'src/app/core/baseForm';
import { TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
var LoginComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LoginComponent, _super);
    function LoginComponent(securityService, router, toastr) {
        var _this = _super.call(this, toastr) || this;
        _this.securityService = securityService;
        _this.router = router;
        _this.login = {};
        _this.auth = new Auth();
        return _this;
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.securityService.login(this.login).subscribe(function (resp) {
            _this.securityService.saveAuth(resp);
            _this.router.navigate(["books"]);
        }, function (error) {
            _this.handlerError(error);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__param(2, Inject(TOASTR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [SecurityService, Router, Object])
    ], LoginComponent);
    return LoginComponent;
}(BaseForm));
export { LoginComponent };
//# sourceMappingURL=login.component.js.map