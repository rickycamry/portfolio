import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../security/security.service';
var BookListGuard = /** @class */ (function () {
    function BookListGuard(router, securityService) {
        this.router = router;
        this.securityService = securityService;
    }
    BookListGuard.prototype.canActivate = function (next, state) {
        var isAuthorized = this.securityService.getAuth() ? true : false;
        if (!isAuthorized) {
            this.router.navigate(['account/login']);
        }
        return true;
    };
    ;
    BookListGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, SecurityService])
    ], BookListGuard);
    return BookListGuard;
}());
export { BookListGuard };
//# sourceMappingURL=book-list.guard.js.map