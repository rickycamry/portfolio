import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var BookListItemComponent = /** @class */ (function () {
    function BookListItemComponent() {
        // this.book.PhotoUrl=this.book.PhotoUrl==null?"https://www.on-queue.com/productImages/No_Image.jpg":this.book.PhotoUrl;
        //  console.log(this.book.Title+" "+this.book.PhotoUrl)
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], BookListItemComponent.prototype, "book", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], BookListItemComponent.prototype, "isProfile", void 0);
    BookListItemComponent = tslib_1.__decorate([
        Component({
            selector: 'book-list-item',
            templateUrl: './book-list-item.component.html',
            styles: ["\n       button{\n           margin-left:5px\n       }\n    "]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BookListItemComponent);
    return BookListItemComponent;
}());
export { BookListItemComponent };
//# sourceMappingURL=book-list-item.component.js.map