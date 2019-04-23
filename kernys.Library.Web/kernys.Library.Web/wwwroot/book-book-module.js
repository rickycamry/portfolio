(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"],{

/***/ "./src/app/book/book.module.ts":
/*!*************************************!*\
  !*** ./src/app/book/book.module.ts ***!
  \*************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book.routes */ "./src/app/book/book.routes.ts");
/* harmony import */ var _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/book-detail.component */ "./src/app/book/detail/book-detail.component.ts");
/* harmony import */ var _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilies/utilies.module */ "./src/app/utilies/utilies.module.ts");
/* harmony import */ var _create_book_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/book-create.component */ "./src/app/book/create/book-create.component.ts");









var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailComponent"],
                _create_book_create_component__WEBPACK_IMPORTED_MODULE_8__["BookCreateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_7__["UtilitiesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_book_routes__WEBPACK_IMPORTED_MODULE_5__["BookRoutes"])
            ]
        })
    ], BookModule);
    return BookModule;
}());



/***/ }),

/***/ "./src/app/book/book.routes.ts":
/*!*************************************!*\
  !*** ./src/app/book/book.routes.ts ***!
  \*************************************/
/*! exports provided: BookRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRoutes", function() { return BookRoutes; });
/* harmony import */ var _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail/book-detail.component */ "./src/app/book/detail/book-detail.component.ts");
/* harmony import */ var _detail_book_detail_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/book-detail.guard */ "./src/app/book/detail/book-detail.guard.ts");
/* harmony import */ var _create_book_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/book-create.component */ "./src/app/book/create/book-create.component.ts");



var BookRoutes = [
    { path: 'create', component: _create_book_create_component__WEBPACK_IMPORTED_MODULE_2__["BookCreateComponent"], canActivate: [_detail_book_detail_guard__WEBPACK_IMPORTED_MODULE_1__["BookDetailGuard"]], data: { breadcrumb: 'Create' } },
    { path: ':id', component: _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_0__["BookDetailComponent"], canActivate: [_detail_book_detail_guard__WEBPACK_IMPORTED_MODULE_1__["BookDetailGuard"]], data: { breadcrumb: 'Details' } },
];


/***/ }),

/***/ "./src/app/book/create/book-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/book/create/book-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create a new book</h2>"

/***/ }),

/***/ "./src/app/book/create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book/create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent() {
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book/create/book-create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book/detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book/detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <h3>{{book.Title}}</h3>\r\n <br/>\r\n <div class=\"card mb-12\" style=\"max-width: 940px;\">\r\n     <div class=\"row no-gutters\">\r\n       <div class=\"col-md-4\">\r\n         <img [src]=\"book.PhotoUrl\" class=\"card-img\" alt=\"...\">\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n         <div class=\"card-body\">\r\n           <p class=\"card-text\">Language: {{book.Language}}</p>\r\n           <p class=\"card-text\">Author:</p>\r\n           <ul>\r\n             <li *ngFor=\"let a of book?.Authors\">\r\n               <a [routerLink]=\"['/author/', a.Id]\">{{a.FirstName}} {{a.LastName}}</a>\r\n             </li>\r\n           </ul>\r\n           <p class=\"card-text\">Publisher: {{book?.Publisher?.Name}}</p>\r\n           <p class=\"card-text\">Price: {{book.Price | currency:'USD'}}</p>\r\n \r\n           <p class=\"card-text\"><small class=\"text-muted\">Year: {{book.Year}}</small></p>\r\n           <p class=\"card-text\"><small class=\"text-muted\">ISBN: {{book.ISBN}}</small></p>\r\n           <h5>Description</h5>\r\n           <h5 class=\"card-title\">{{book.Description}}</h5>\r\n         </div>\r\n         <div class=\"card-footer bg-transparent border-success\">\r\n           <button type=\"button\" class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/']\">Go Back</button>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>"

/***/ }),

/***/ "./src/app/book/detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book/detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(bookService, actRoute) {
        this.bookService = bookService;
        this.actRoute = actRoute;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = +this.actRoute.snapshot.params["id"];
        this.bookService.getBook(bookId).subscribe(function (x) {
            return _this.book = x;
        });
    };
    BookDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book/detail/book-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book/detail/book-detail.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/book/detail/book-detail.guard.ts ***!
  \**************************************************/
/*! exports provided: BookDetailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailGuard", function() { return BookDetailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../security/security.service */ "./src/app/security/security.service.ts");




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
    BookDetailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _security_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
    ], BookDetailGuard);
    return BookDetailGuard;
}());



/***/ })

}]);
//# sourceMappingURL=book-book-module.js.map