import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security/security.service';
var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(router, securityService) {
        this.router = router;
        this.securityService = securityService;
    }
    ProfileGuard.prototype.canActivate = function (next, state) {
        var isAuthorized = this.securityService.getAuth() ? true : false;
        if (!isAuthorized) {
            this.router.navigate(['account/login']);
        }
        return true;
    };
    ;
    ProfileGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router, SecurityService])
    ], ProfileGuard);
    return ProfileGuard;
}());
export { ProfileGuard };
//# sourceMappingURL=profile.guard.js.map