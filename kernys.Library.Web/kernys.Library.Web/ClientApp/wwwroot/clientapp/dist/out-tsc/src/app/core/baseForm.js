import * as tslib_1 from "tslib";
import { TOASTR_TOKEN } from './interfaces/toastr';
import { Inject } from '@angular/core';
var BaseForm = /** @class */ (function () {
    function BaseForm(_toastr) {
        this._toastr = _toastr;
        // this.form = _form;
        this.toastr = _toastr;
    }
    BaseForm.prototype.formIsValid = function () {
        return this.form.valid;
    };
    //retrieve a FormControl
    BaseForm.prototype.getFormControlValue = function (name) {
        return this.form.get(name).value;
    };
    //retrieve a FormControl
    BaseForm.prototype.getFormControl = function (name) {
        return this.form.get(name);
    };
    //return True if the formcontrol is valid
    BaseForm.prototype.isValid = function (name) {
        var e = this.getFormControl(name);
        return e && e.valid;
    };
    //returns true if the formcontrl has been changed
    BaseForm.prototype.isChanged = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    };
    //return True if the FormControl is invalid after user changes
    BaseForm.prototype.hasError = function (name) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    };
    BaseForm.prototype.handlerError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            //client side or network error occurred.
            errorMessage = "Error: " + err.error.message;
            this.toastr.error(errorMessage);
        }
        else {
            //The backend returned an unsuccesful response code.
            errorMessage = "Server error code: " + err.status + ", error message is: " + err.error;
            this.toastr.error(err.error, "Error: " + err.status + " " + err.statusText);
        }
        return errorMessage;
    };
    BaseForm = tslib_1.__decorate([
        tslib_1.__param(0, Inject(TOASTR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], BaseForm);
    return BaseForm;
}());
export { BaseForm };
//# sourceMappingURL=baseForm.js.map