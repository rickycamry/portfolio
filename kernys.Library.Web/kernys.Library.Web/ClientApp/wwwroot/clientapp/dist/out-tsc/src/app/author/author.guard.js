import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security/security.service';
var AuthorGuard = /** @class */ (function () {
    function AuthorGuard(router, securityService) {
        this.router = router;
        this.securityService = securityService;
    }
    AuthorGuard.prototype.canActivate = function (next, state) {
        var isAuthorized = this.securityService.getAuth() ? true : false;
        if (!isAuthorized) {
            this.router.navigate(['account/login']);
        }
        return true;
    };
    ;
    AuthorGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, SecurityService])
    ], AuthorGuard);
    return AuthorGuard;
}());
export { AuthorGuard };
//# sourceMappingURL=author.guard.js.map