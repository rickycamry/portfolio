import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../security/security.service';
var BookDetailGuard = /** @class */ (function () {
    function BookDetailGuard(router, securityService) {
        this.router = router;
        this.securityService = securityService;
    }
    BookDetailGuard.prototype.canActivate = function (next, state) {
        var isAuthorized = this.securityService.getAuth() ? true : false;
        if (!isAuthorized) {
            this.router.navigate(['account/login']);
        }
        return true;
    };
    ;
    BookDetailGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, SecurityService])
    ], BookDetailGuard);
    return BookDetailGuard;
}());
export { BookDetailGuard };
//# sourceMappingURL=book-detail.guard.js.map