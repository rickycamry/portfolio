(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./author/author.module": [
		"./src/app/author/author.module.ts",
		"author-author-module"
	],
	"./book/book.module": [
		"./src/app/book/book.module.ts",
		"book-book-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _library_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library-app.component */ "./src/app/library-app.component.ts");
/* harmony import */ var _layout_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/nav-menu/nav-menu.component */ "./src/app/layout/nav-menu/nav-menu.component.ts");
/* harmony import */ var _library_app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library-app.routes */ "./src/app/library-app.routes.ts");
/* harmony import */ var _error_404__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/404 */ "./src/app/error/404.ts");
/* harmony import */ var _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilies/utilies.module */ "./src/app/utilies/utilies.module.ts");
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/breadcrumb/breadcrumb.component */ "./src/app/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _security_http_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./security/http-interceptor */ "./src/app/security/http-interceptor.ts");
/* harmony import */ var _security_login_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./security/login/logout.component */ "./src/app/security/login/logout.component.ts");
/* harmony import */ var _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./security/sign-up/sign-up.component */ "./src/app/security/sign-up/sign-up.component.ts");
/* harmony import */ var _core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book/list/book-list.component */ "./src/app/book/list/book-list.component.ts");








//











var toastr = window['toastr'];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _library_app_component__WEBPACK_IMPORTED_MODULE_5__["LibraryAppComponent"],
                _layout_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_18__["BookListComponent"],
                _error_404__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _security_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _security_login_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_9__["UtilitiesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_library_app_routes__WEBPACK_IMPORTED_MODULE_7__["LibraryRoutes"]),
                _security_http_interceptor__WEBPACK_IMPORTED_MODULE_13__["HtppInterceptorModule"]
            ],
            providers: [
                { provide: _core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_16__["TOASTR_TOKEN"], useValue: toastr }
            ],
            bootstrap: [_library_app_component__WEBPACK_IMPORTED_MODULE_5__["LibraryAppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.service.ts":
/*!**************************************!*\
  !*** ./src/app/book/book.service.ts ***!
  \**************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");



var BookService = /** @class */ (function () {
    function BookService(http, baseURl) {
        this.http = http;
        this.baseURl = baseURl;
    }
    BookService.prototype.getBooks = function () {
        var url = this.baseURl + 'api/book';
        return this.http.get(url);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.baseURl + 'api/book/' + id;
        return this.http.get(url);
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/book/list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book/list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> List of books 2</h2>\r\n \r\n\r\n\r\n<div class=\"card-deck\">\r\n<div class=\"row\">\r\n  <div class=\"col-4\" *ngFor=\"let b of books\">\r\n    <img src=\"{{b.PhotoUrl}}\" width=\"80%\" height=\"300px\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{b.Title}}</h5>\r\n      <p class=\"card-text\">{{b.Description | reduceParagraph:200}}</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">ISBN:{{b.ISBN}}</small></p>\r\n       <ul>\r\n       <li *ngFor=\"let a of b.Authors\" >\r\n        <a [routerLink]=\"['/author/',a.Id]\">{{a.FirstName}} {{a.LastName}}</a>   \r\n       </li>\r\n       </ul>\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"handleDetail(b)\">Detail</button>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/book/list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book/list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");




var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, route) {
        this.bookService = bookService;
        this.route = route;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (x) {
            _this.books = x;
        });
    };
    BookListComponent.prototype.handleDetail = function (b) {
        this.route.navigate(['/book/', b.Id]);
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'books',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book/list/book-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/list/book-list.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/book/list/book-list.guard.ts ***!
  \**********************************************/
/*! exports provided: BookListGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListGuard", function() { return BookListGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../security/security.service */ "./src/app/security/security.service.ts");




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
    BookListGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _security_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
    ], BookListGuard);
    return BookListGuard;
}());



/***/ }),

/***/ "./src/app/core/baseForm.ts":
/*!**********************************!*\
  !*** ./src/app/core/baseForm.ts ***!
  \**********************************/
/*! exports provided: BaseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForm", function() { return BaseForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interfaces_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");



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
    BaseForm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_interfaces_toastr__WEBPACK_IMPORTED_MODULE_1__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], BaseForm);
    return BaseForm;
}());



/***/ }),

/***/ "./src/app/core/interfaces/toastr.ts":
/*!*******************************************!*\
  !*** ./src/app/core/interfaces/toastr.ts ***!
  \*******************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toastr');


/***/ }),

/***/ "./src/app/error/404.ts":
/*!******************************!*\
  !*** ./src/app/error/404.ts ***!
  \******************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<h1>404 :(</h1>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/layout/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var BreadcrumbComponent = /** @class */ (function () {
    /**
     * @class DetailComponent
     * @constructor
     */
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    /**
     * Let's go!
     *
     * @class DetailComponent
     * @method ngOnInit
     */
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            console.log('executed...');
            //set breadcrumbs
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
        //   subscribe to the NavigationEnd event
        //   this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        //     set breadcrumbs
        //     let root: ActivatedRoute = this.activatedRoute.root;
        //     this.breadcrumbs = this.getBreadcrumbs(root);
        //   });
        // }
    };
    BreadcrumbComponent.prototype.showArray = function () {
        console.log(this.breadcrumbs.length);
    };
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        var children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return this.breadcrumbs;
        }
        //iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            //verify primary route
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, this.breadcrumbs);
            }
            //get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            //append route URL to URL
            url += "/" + routeURL;
            //add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            this.breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, this.breadcrumbs);
        }
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "breadcrumb",
            template: "\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\">\n    <a [routerLink]=\"[breadcrumb.url]\">{{ breadcrumb.label }}</a>\n    </li>\n   </ol>\n   <button (click)=\"showArray()\">show array</button>\n</nav>     \n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/layout/nav-menu/nav-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/nav-menu/nav-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9zcmMvYXBwL2xheW91dC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7R0FDdkI7O0VBRUQ7SUFDRSxnQkFBZ0I7R0FDakI7O0VBQ0Q7SUFDRTtNQUNFLGdCQUFnQjtLQUNqQjtHQUNGOztFQUVEO0lBQ0UsK0NBQStDO0dBQ2hEIiwiZmlsZSI6IkNsaWVudEFwcC9zcmMvYXBwL2xheW91dC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXZiYXItYnJhbmQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJveC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/layout/nav-menu/nav-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/nav-menu/nav-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header>\r\n    <nav class='navbar navbar-expand-lg navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>kernys.Library.Web</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n          [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n          <ul class=\"navbar-nav flex-grow\">\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n              <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Books</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                <a class=\"nav-link text-dark\" [routerLink]='[\"/authors\"]'>Authors</a>\r\n              </li>\r\n          </ul>\r\n          <form class=\"form-inline my-2 my-lg-0\">\r\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n      \r\n      </div>\r\n   \r\n    </nav>\r\n  </header>\r\n   -->\r\n  <header>\r\n   <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>Kernys</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item active\" [routerLinkActive]='[\"active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link\" [routerLink]='[\"/\"]'>Books <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link\" [routerLink]='[\"/authors\"]'>Authors</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Dropdown\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n          </li> -->\r\n        </ul>\r\n      \r\n        <ul class=\"navbar-nav flex-row ml-md-auto d-md-flex\">\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-item nav-link mr-md-2\" [routerLink]=\"['account/login']\"  *ngIf=\"!auth\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Login \r\n                  </a>\r\n                   \r\n              <a class=\"nav-item nav-link dropdown-toggle mr-md-2\" *ngIf=\"auth\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Welcome {{auth.DisplayName}}\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right\" *ngIf=\"auth\" aria-labelledby=\"bd-versions\">\r\n                <a class=\"dropdown-item active\" [routerLink]='[\"profile\"]'>Profile</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"https://v4-alpha.getbootstrap.com/\">v4 Alpha 6</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\"  [routerLink]=\"['account/logout']\">Log Out</a>\r\n              </div>\r\n            </li>\r\n        \r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link p-2\" href=\"https://github.com/twbs/bootstrap\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 499.36\" role=\"img\" focusable=\"false\"><title>GitHub</title><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\"></path></svg></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link p-2\" href=\"https://twitter.com/getbootstrap\" target=\"_blank\" rel=\"noopener\" aria-label=\"Twitter\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 416.32\" role=\"img\" focusable=\"false\"><title>Twitter</title><path fill=\"currentColor\" d=\"M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92\"></path></svg></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link p-2\" href=\"https://bootstrap-slack.herokuapp.com/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Slack\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 512\" role=\"img\" focusable=\"false\"><title>Slack</title><path fill=\"currentColor\" d=\"M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z\"></path><path fill=\"currentColor\" d=\"M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z\"></path></svg></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link p-2\" href=\"https://opencollective.com/bootstrap/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Open Collective\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" fill-rule=\"evenodd\" class=\"navbar-nav-svg\" viewBox=\"0 0 40 41\" role=\"img\" focusable=\"false\"><title>Open Collective</title><path fill-opacity=\".4\" d=\"M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z\"></path><path d=\"M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z\"></path></svg></a>\r\n            </li>\r\n          </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>\r\n  </header>"

/***/ }),

/***/ "./src/app/layout/nav-menu/nav-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/nav-menu/nav-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/security/security.service */ "./src/app/security/security.service.ts");



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(securityService) {
        var _this = this;
        this.securityService = securityService;
        this.isExpanded = false;
        this.securityService.authEmitter.subscribe(function (resp) {
            return _this.auth = resp;
        });
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        this.auth = this.securityService.getAuth();
    };
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/layout/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/layout/nav-menu/nav-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_security_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/library-app.component.css":
/*!*******************************************!*\
  !*** ./src/app/library-app.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvc3JjL2FwcC9saWJyYXJ5LWFwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/library-app.component.html":
/*!********************************************!*\
  !*** ./src/app/library-app.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <body>\n    <app-nav-menu></app-nav-menu>\n    <!-- <breadcrumb></breadcrumb> -->\n    <div class=\"container\">\n      {{title}}\n      \n      <router-outlet></router-outlet>\n    </div>\n  </body>\n  "

/***/ }),

/***/ "./src/app/library-app.component.ts":
/*!******************************************!*\
  !*** ./src/app/library-app.component.ts ***!
  \******************************************/
/*! exports provided: LibraryAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryAppComponent", function() { return LibraryAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var LibraryAppComponent = /** @class */ (function () {
    function LibraryAppComponent() {
        this.title = '';
    }
    LibraryAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'library-app',
            template: __webpack_require__(/*! ./library-app.component.html */ "./src/app/library-app.component.html"),
            styles: [__webpack_require__(/*! ./library-app.component.css */ "./src/app/library-app.component.css")]
        })
    ], LibraryAppComponent);
    return LibraryAppComponent;
}());



/***/ }),

/***/ "./src/app/library-app.routes.ts":
/*!***************************************!*\
  !*** ./src/app/library-app.routes.ts ***!
  \***************************************/
/*! exports provided: LibraryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryRoutes", function() { return LibraryRoutes; });
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/list/book-list.component */ "./src/app/book/list/book-list.component.ts");
/* harmony import */ var _error_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/404 */ "./src/app/error/404.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _security_login_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/login/logout.component */ "./src/app/security/login/logout.component.ts");
/* harmony import */ var _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/sign-up/sign-up.component */ "./src/app/security/sign-up/sign-up.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _book_list_book_list_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/list/book-list.guard */ "./src/app/book/list/book-list.guard.ts");







var LibraryRoutes = [
    { path: '', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__["BookListComponent"], pathMatch: 'full', canActivate: [_book_list_book_list_guard__WEBPACK_IMPORTED_MODULE_6__["BookListGuard"]], data: { breadcrumb: 'Books' } },
    { path: 'books', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_0__["BookListComponent"], canActivate: [_book_list_book_list_guard__WEBPACK_IMPORTED_MODULE_6__["BookListGuard"]], data: { breadcrumb: 'Books' } },
    { path: 'book', loadChildren: './book/book.module#BookModule', data: { breadcrumb: 'Book' } },
    { path: 'authors', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Authors' } },
    { path: 'author', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Author' } },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: '404', component: _error_404__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"] },
    { path: 'account/logout', component: _security_login_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
    { path: 'account/login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { breadcrumb: 'Login' } },
    { path: 'account/signup', component: _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], data: { breadcrumb: 'Sign up' } },
];


/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My profile</h1>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/security/Auth.ts":
/*!**********************************!*\
  !*** ./src/app/security/Auth.ts ***!
  \**********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());



/***/ }),

/***/ "./src/app/security/http-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/http-interceptor.ts ***!
  \**********************************************/
/*! exports provided: HttpRequestInterceptor, HtppInterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtppInterceptorModule", function() { return HtppInterceptorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security.service */ "./src/app/security/security.service.ts");




var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(securityService) {
        this.securityService = securityService;
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        var auth = this.securityService.getAuth();
        if (auth) {
            var newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + auth.Token)
            });
            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    };
    HttpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());

var HtppInterceptorModule = /** @class */ (function () {
    function HtppInterceptorModule() {
    }
    HtppInterceptorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: HttpRequestInterceptor,
                    multi: true //Multiple instance of this are allow
                }
            ]
        })
    ], HtppInterceptorModule);
    return HtppInterceptorModule;
}());



/***/ }),

/***/ "./src/app/security/login/login.component.css":
/*!****************************************************!*\
  !*** ./src/app/security/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n\tbackground: #eee !important;\t\r\n}\r\n\r\n.wrapper {\t\r\n\tmargin-top: 80px;\r\n  margin-bottom: 80px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 380px;\r\n  padding: 15px 35px 45px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0,0.1);  \r\n}\r\n\r\n.form-signin-heading,\r\n\t.checkbox {\r\n\t  margin-bottom: 30px;\r\n\t}\r\n\r\n.checkbox {\r\n\t  font-weight: normal;\r\n\t}\r\n\r\n.form-control {\r\n\t  position: relative;\r\n\t  font-size: 16px;\r\n\t  height: auto;\r\n\t  padding: 10px;\r\n\t \r\n\t}\r\n\r\ninput[type=\"text\"] {\r\n\t  margin-bottom: -1px;\r\n\t  border-bottom-left-radius: 0;\r\n\t  border-bottom-right-radius: 0;\r\n\t}\r\n\r\ninput[type=\"password\"] {\r\n\t  margin-bottom: 20px;\r\n\t  border-top-left-radius: 0;\r\n\t  border-top-right-radius: 0;\r\n\t}\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9zcmMvYXBwL3NlY3VyaXR5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw0QkFBNEI7Q0FDNUI7O0FBRUQ7Q0FDQyxpQkFBaUI7RUFDaEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtDQUFrQztDQUNuQzs7QUFDQzs7R0FFQyxvQkFBb0I7RUFDckI7O0FBRUQ7R0FDRSxvQkFBb0I7RUFDckI7O0FBRUQ7R0FDRSxtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixjQUFjOztFQUVmOztBQUVEO0dBQ0Usb0JBQW9CO0dBQ3BCLDZCQUE2QjtHQUM3Qiw4QkFBOEI7RUFDL0I7O0FBRUQ7R0FDRSxvQkFBb0I7R0FDcEIsMEJBQTBCO0dBQzFCLDJCQUEyQjtFQUM1QiIsImZpbGUiOiJDbGllbnRBcHAvc3JjL2FwcC9zZWN1cml0eS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcblx0YmFja2dyb3VuZDogI2VlZSAhaW1wb3J0YW50O1x0XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcdFxyXG5cdG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzVweCA0NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpOyAgXHJcbn1cclxuICAuZm9ybS1zaWduaW4taGVhZGluZyxcclxuXHQuY2hlY2tib3gge1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblxyXG5cdC5jaGVja2JveCB7XHJcblx0ICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdH1cclxuXHJcblx0LmZvcm0tY29udHJvbCB7XHJcblx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICBmb250LXNpemU6IDE2cHg7XHJcblx0ICBoZWlnaHQ6IGF1dG87XHJcblx0ICBwYWRkaW5nOiAxMHB4O1xyXG5cdCBcclxuXHR9XHJcblxyXG5cdGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuXHQgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcblx0ICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG5cdCAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcblx0fVxyXG5cclxuXHRpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHQgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcblx0ICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuXHR9XHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/security/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/security/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <form class=\"form-signin\" #loginForm=\"ngForm\">       \r\n      <h2 class=\"form-signin-heading\">Login</h2>\r\n      <em>{{errorMessage}}</em>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.Username\" name=\"username\" id=\"username\"  placeholder=\"Username\" required autofocus=\"\" />\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"login.Password\" name=\"password\" placeholder=\"Password\" required/>      \r\n      <label class=\"checkbox\">\r\n        <input type=\"checkbox\" value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\"> Remember me\r\n      </label>\r\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"loginForm.invalid\" (click)=\"onLogin()\">Login</button>  \r\n      <br>\r\n      <a [routerLink]=\"['/account/signup']\">Sign up</a> \r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/security/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/security/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth */ "./src/app/security/Auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/baseForm */ "./src/app/core/baseForm.ts");
/* harmony import */ var src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");







var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent(securityService, router, toastr) {
        var _this = _super.call(this, toastr) || this;
        _this.securityService = securityService;
        _this.router = router;
        _this.login = {};
        _this.auth = new _Auth__WEBPACK_IMPORTED_MODULE_3__["Auth"]();
        return _this;
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.securityService.login(this.login).subscribe(function (resp) {
            _this.securityService.saveAuth(resp);
            _this.router.navigate(["books"]);
        }, function (error) {
            _this.handlerError(error);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/security/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])
    ], LoginComponent);
    return LoginComponent;
}(src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_5__["BaseForm"]));



/***/ }),

/***/ "./src/app/security/login/logout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/security/login/logout.component.ts ***!
  \****************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Auth */ "./src/app/security/Auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(securityService, router) {
        var _this = this;
        this.securityService = securityService;
        this.router = router;
        this.login = {};
        this.auth = new _Auth__WEBPACK_IMPORTED_MODULE_3__["Auth"]();
        this.securityService.logOut().subscribe(function (resp) {
            _this.securityService.removeAuth();
            _this.router.navigate(["account/login"]);
        });
    }
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: ''
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/security/security.service.ts":
/*!**********************************************!*\
  !*** ./src/app/security/security.service.ts ***!
  \**********************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");



var SecurityService = /** @class */ (function () {
    function SecurityService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.authValue = 'authValue';
        this.authEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SecurityService.prototype.login = function (login) {
        var url = this.baseUrl + 'api/account/login';
        return this.http.post(url, login);
    };
    SecurityService.prototype.logOut = function () {
        var url = this.baseUrl + 'api/account/LogOut';
        return this.http.delete(url);
    };
    SecurityService.prototype.signUp = function (signUp) {
        var url = this.baseUrl + 'api/account/signUP';
        return this.http.post(url, signUp);
    };
    SecurityService.prototype.saveAuth = function (auth) {
        this.removeAuth();
        localStorage.setItem(this.authValue, JSON.stringify(auth));
    };
    SecurityService.prototype.removeAuth = function () {
        localStorage.removeItem(this.authValue);
        this.authEmitter.emit(null);
    };
    SecurityService.prototype.getAuth = function () {
        var value = localStorage.getItem(this.authValue);
        var a = value ? JSON.parse(value) : null;
        //emitter to update the navbar 
        this.authEmitter.emit(a);
        return a;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SecurityService.prototype, "authEmitter", void 0);
    SecurityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/security/sign-up/sign-up.component.html":
/*!*********************************************************!*\
  !*** ./src/app/security/sign-up/sign-up.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n    <h2>{{pageTitle}} \r\n    </h2>\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" role=\"alert\">\r\n        {{errorMessage}}\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"Username\">Username</label>\r\n        <input type=\"text\" formControlName=\"Username\" id=\"Username\" class=\"form-control\" placeholder=\"Username\">\r\n        <small class=\"form-text text-muted\" *ngIf=\"hasError('Username')\">Required</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"DisplayName\">Display Name</label>\r\n        <input type=\"text\" formControlName=\"DisplayName\" class=\"form-control\" placeholder=\"Display Name\">\r\n        <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"Email\">Email</label>\r\n        <input type=\"text\" formControlName=\"Email\" class=\"form-control\" placeholder=\"Email\">\r\n        <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"Password\">Password</label>\r\n        <input type=\"password\" formControlName=\"Password\" class=\"form-control\" placeholder=\"Password\">\r\n        <small class=\"form-text text-muted\"></small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"ConfirmPassword\">Confirm Password</label>\r\n        <input type=\"password\" formControlName=\"ConfirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n        <small class=\"form-text text-muted\" *ngIf=\"confirmPasswordInValid('Password','ConfirmPassword')\">The password and the confirm password do not match.</small>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid || confirmPasswordInValid('Password','ConfirmPassword')\">Sign Up</button>\r\n\r\n    <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Cancel</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/security/sign-up/sign-up.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/sign-up/sign-up.component.ts ***!
  \*******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security.service */ "./src/app/security/security.service.ts");
/* harmony import */ var src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/baseForm */ "./src/app/core/baseForm.ts");
/* harmony import */ var src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");







var SignUpComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignUpComponent, _super);
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
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DisplayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
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
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/security/sign-up/sign-up.component.html"),
            styles: ["\n  .text-muted {\n    color: #ff3333!important;\n              }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"], Object])
    ], SignUpComponent);
    return SignUpComponent;
}(src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_5__["BaseForm"]));



/***/ }),

/***/ "./src/app/utilies/pipes/reduce-paragraph.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/utilies/pipes/reduce-paragraph.pipe.ts ***!
  \********************************************************/
/*! exports provided: ReduceParagraphPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduceParagraphPipe", function() { return ReduceParagraphPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ReduceParagraphPipe = /** @class */ (function () {
    function ReduceParagraphPipe() {
    }
    ReduceParagraphPipe.prototype.transform = function (value, maxCharacters) {
        if (maxCharacters === void 0) { maxCharacters = 50; }
        if (!value || value.length <= maxCharacters)
            return value;
        return value ? value.substring(0, maxCharacters) + '...' : '';
    };
    ReduceParagraphPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reduceParagraph'
        })
    ], ReduceParagraphPipe);
    return ReduceParagraphPipe;
}());



/***/ }),

/***/ "./src/app/utilies/utilies.module.ts":
/*!*******************************************!*\
  !*** ./src/app/utilies/utilies.module.ts ***!
  \*******************************************/
/*! exports provided: UtilitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesModule", function() { return UtilitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_reduce_paragraph_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/reduce-paragraph.pipe */ "./src/app/utilies/pipes/reduce-paragraph.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");




var UtilitiesModule = /** @class */ (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _pipes_reduce_paragraph_pipe__WEBPACK_IMPORTED_MODULE_2__["ReduceParagraphPipe"]
            ],
            exports: [_pipes_reduce_paragraph_pipe__WEBPACK_IMPORTED_MODULE_2__["ReduceParagraphPipe"]]
        })
    ], UtilitiesModule);
    return UtilitiesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\Kernys.Library\kernys.Library.Web\kernys.library.web\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map