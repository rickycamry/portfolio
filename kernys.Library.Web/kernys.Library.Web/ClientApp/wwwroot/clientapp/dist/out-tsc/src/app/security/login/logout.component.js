import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import { Auth } from '../Auth';
import { Router } from '@angular/router';
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(securityService, router) {
        var _this = this;
        this.securityService = securityService;
        this.router = router;
        this.login = {};
        this.auth = new Auth();
        this.securityService.logOut().subscribe(function (resp) {
            _this.securityService.removeAuth();
            _this.router.navigate(["account/login"]);
        });
    }
    LogoutComponent = tslib_1.__decorate([
        Component({
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [SecurityService, Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map