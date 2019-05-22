import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { BaseForm } from 'src/app/core/baseForm';
import { TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
var SignUpComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SignUpComponent, _super);
    function SignUpComponent(fb, router, securityService, _toastr) {
        var _this = _super.call(this, _toastr) || this;
        _this.fb = fb;
        _this.router = router;
        _this.securityService = securityService;
        _this.pageTitle = 'Sign up';
        _this.errorMessage = '';
        return _this;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.load();
    };
    SignUpComponent.prototype.load = function () {
        this.form = this.fb.group({
            Username: ['', Validators.required],
            DisplayName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            Password: ['', [Validators.required, Validators.minLength(8)]],
            ConfirmPassword: ['', [Validators.required]]
        });
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formIsValid()) {
            var signUp = this.form.value;
            this.securityService.signUp(signUp).subscribe(function (resp) {
                _this.router.navigate(['/account/login']);
            }, function (error) { return _this.errorMessage = _this.handlerError(error); });
        }
    };
    SignUpComponent.prototype.onCancel = function () {
        this.router.navigate(['/account/login']);
    };
    //  validForm(pass:string,confPas:string){
    //   return !this.confirmPasswordInValid(pass,confPas) 
    //  }
    SignUpComponent.prototype.confirmPasswordInValid = function (pass, confPas) {
        //  /this.getFormControlValue(pass)==this.getFormControlValue(confPas)) 
        return (this.getFormControlValue(pass) !== this.getFormControlValue(confPas)) && this.isChanged(confPas);
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'sign-up.component.html',
            styles: ["\n  .text-muted {\n    color: #ff3333!important;\n              }"]
        }),
        tslib_1.__param(3, Inject(TOASTR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            SecurityService, Object])
    ], SignUpComponent);
    return SignUpComponent;
}(BaseForm));
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map