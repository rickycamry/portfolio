(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["author-author-module"],{

/***/ "./src/app/author/author-details.component.html":
/*!******************************************************!*\
  !*** ./src/app/author/author-details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <h3>{{author.FirstName}} - {{author.LastName}}</h3>\r\n <br/>\r\n <div class=\"card mb-12\" style=\"max-width: 940px;\">\r\n     <div class=\"row no-gutters\">\r\n       <div class=\"col-md-4\">\r\n         <img [src]=\"author.PhotoUrl\" class=\"card-img\" alt=\"...\">\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n         <div class=\"card-body\">\r\n           <h5>Description</h5>\r\n           <h5 class=\"card-title\">{{author.Biography}}</h5>\r\n           <h6>Books</h6>\r\n          <ul>\r\n            <li *ngFor=\"let b of author?.Books\"><a [routerLink]=\"['/book',b.Id]\">{{b.Title}}</a></li>\r\n          </ul>\r\n         </div>\r\n         <div class=\"card-footer bg-transparent border-success\">\r\n           <button type=\"button\" class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/authors']\">Go Back</button>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>"

/***/ }),

/***/ "./src/app/author/author-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/author/author-details.component.ts ***!
  \****************************************************/
/*! exports provided: AuthorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorDetailsComponent", function() { return AuthorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.service */ "./src/app/author/author.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var AuthorDetailsComponent = /** @class */ (function () {
    function AuthorDetailsComponent(authorService, activeRoute) {
        this.authorService = authorService;
        this.activeRoute = activeRoute;
    }
    AuthorDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var authorId = +this.activeRoute.snapshot.params["id"];
        this.authorService.getAuthor(authorId).subscribe(function (x) { return _this.author = x; });
    };
    AuthorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./author-details.component.html */ "./src/app/author/author-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AuthorDetailsComponent);
    return AuthorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/author/author-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/author/author-list.component.ts ***!
  \*************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.service */ "./src/app/author/author.service.ts");



var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(authorService) {
        this.authorService = authorService;
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAuthors().subscribe(function (x) { return _this.authors = x; });
    };
    AuthorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n<h1>List of authors</h1>\n \n<div class=\"card mb-3\" *ngFor=\"let a of authors\"  style=\"max-width: 540px;\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-4\">\n      <img [src]=\"a.PhotoUrl\" alt=\"{{a.FirstName}} {{a.LastName}}\">\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{a.FirstName}} {{a.LastName}}</h5>\n        <p class=\"card-text\">{{a.Biography | reduceParagraph:100}}</p>\n      </div>\n    </div>\n\n  </div>\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/author/', a.Id]\">Detail</button>\n\n</div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/author/author.module.ts":
/*!*****************************************!*\
  !*** ./src/app/author/author.module.ts ***!
  \*****************************************/
/*! exports provided: AuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModule", function() { return AuthorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author-list.component */ "./src/app/author/author-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./author.routes */ "./src/app/author/author.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _author_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./author-details.component */ "./src/app/author/author-details.component.ts");
/* harmony import */ var _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilies/utilies.module */ "./src/app/utilies/utilies.module.ts");









var AuthorModule = /** @class */ (function () {
    function AuthorModule() {
    }
    AuthorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _author_list_component__WEBPACK_IMPORTED_MODULE_2__["AuthorListComponent"],
                _author_details_component__WEBPACK_IMPORTED_MODULE_7__["AuthorDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_8__["UtilitiesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_author_routes__WEBPACK_IMPORTED_MODULE_5__["authorRoutes"])
            ],
            providers: []
        })
    ], AuthorModule);
    return AuthorModule;
}());



/***/ }),

/***/ "./src/app/author/author.routes.ts":
/*!*****************************************!*\
  !*** ./src/app/author/author.routes.ts ***!
  \*****************************************/
/*! exports provided: authorRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorRoutes", function() { return authorRoutes; });
/* harmony import */ var _author_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./author-list.component */ "./src/app/author/author-list.component.ts");
/* harmony import */ var _author_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author-details.component */ "./src/app/author/author-details.component.ts");


var authorRoutes = [
    { path: '', component: _author_list_component__WEBPACK_IMPORTED_MODULE_0__["AuthorListComponent"], data: { breadcrumb: '' } },
    // { path: 'authors',  component: AuthorListComponent, canActivate:[AuthorGuard], data:{breadcrumb: '' } },
    { path: ':id', component: _author_details_component__WEBPACK_IMPORTED_MODULE_1__["AuthorDetailsComponent"], data: { breadcrumb: 'Details' } },
];


/***/ }),

/***/ "./src/app/author/author.service.ts":
/*!******************************************!*\
  !*** ./src/app/author/author.service.ts ***!
  \******************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");



var AuthorService = /** @class */ (function () {
    function AuthorService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl + 'api/author';
    }
    AuthorService.prototype.getAuthors = function () {
        return this.http.get(this.url);
    };
    AuthorService.prototype.getAuthor = function (id) {
        var newUrl = this.url + '/' + id;
        return this.http.get(newUrl);
    };
    AuthorService.prototype.postAuthor = function (author) {
        return this.http.post(this.url, author);
    };
    AuthorService.prototype.putAuthor = function (author) {
        return this.http.put(this.url, author);
    };
    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], AuthorService);
    return AuthorService;
}());



/***/ })

}]);
//# sourceMappingURL=author-author-module.js.map