import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SimpleModalComponent.prototype, "modalTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SimpleModalComponent.prototype, "modalId", void 0);
    SimpleModalComponent = tslib_1.__decorate([
        Component({
            selector: 'simple-modal',
            template: "\n  \n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"{{modalId}}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n       <h5 class=\"modal-title\">{{modalTitle}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n       <ng-content select=\"[modal-body]\"></ng-content>\n    </div>\n  </div>\n</div>\n\n  "
        })
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());
export { SimpleModalComponent };
//# sourceMappingURL=simple-modal.component.js.map