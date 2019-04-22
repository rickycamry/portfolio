import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReduceParagraphPipe } from './pipes/reduce-paragraph.pipe';
import { CommonModule } from '@angular/common';
var UtilitiesModule = /** @class */ (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                ReduceParagraphPipe
            ],
            exports: [ReduceParagraphPipe]
        })
    ], UtilitiesModule);
    return UtilitiesModule;
}());
export { UtilitiesModule };
//# sourceMappingURL=utilies.module.js.map