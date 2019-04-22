import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ReduceParagraphPipe = /** @class */ (function () {
    function ReduceParagraphPipe() {
    }
    ReduceParagraphPipe.prototype.transform = function (value, maxCharacters) {
        if (maxCharacters === void 0) { maxCharacters = 50; }
        if (!value || value.length <= maxCharacters)
            return value;
        return value ? value.substring(0, maxCharacters) + '...' : '';
    };
    ReduceParagraphPipe = tslib_1.__decorate([
        Pipe({
            name: 'reduceParagraph'
        })
    ], ReduceParagraphPipe);
    return ReduceParagraphPipe;
}());
export { ReduceParagraphPipe };
//# sourceMappingURL=reduce-paragraph.pipe.js.map