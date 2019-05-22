import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(securityService) {
        var _this = this;
        this.securityService = securityService;
        this.isExpanded = false;
        this.securityService.authEmitter.subscribe(function (resp) {
            return _this.auth = resp;
        });
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        this.auth = this.securityService.getAuth();
    };
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SecurityService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
export { NavMenuComponent };
//# sourceMappingURL=nav-menu.component.js.map