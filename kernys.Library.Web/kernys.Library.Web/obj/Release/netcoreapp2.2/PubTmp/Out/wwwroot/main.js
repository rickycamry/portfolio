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
		"./src/app/book/book.module.ts"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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
/* harmony import */ var _core_interfaces_jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/interfaces/jquery */ "./src/app/core/interfaces/jquery.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _book_book_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book/book.module */ "./src/app/book/book.module.ts");








//












var toastr = window['toastr'];
var jQuery = window['$'];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _library_app_component__WEBPACK_IMPORTED_MODULE_5__["LibraryAppComponent"],
                _layout_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"],
                _error_404__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _security_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _security_login_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["SignUpComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_9__["UtilitiesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_library_app_routes__WEBPACK_IMPORTED_MODULE_7__["LibraryRoutes"]),
                _security_http_interceptor__WEBPACK_IMPORTED_MODULE_13__["HtppInterceptorModule"],
                _book_book_module__WEBPACK_IMPORTED_MODULE_19__["BookModule"]
            ],
            providers: [
                { provide: _core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_16__["TOASTR_TOKEN"], useValue: toastr },
                { provide: _core_interfaces_jquery__WEBPACK_IMPORTED_MODULE_17__["JQUERY_TOKEN"], useValue: jQuery }
            ],
            exports: [],
            bootstrap: [_library_app_component__WEBPACK_IMPORTED_MODULE_5__["LibraryAppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book-publisher/book-publisher-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/book/book-publisher/book-publisher-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<simple-modal [modalTitle]=\"pageTitle\" [modalId]=\"modalId\">\r\n    <div modal-body>\r\n        <form #publisherForm=\"ngForm\" (ngSubmit)=\"onSubmit(publisherForm)\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"publisher.Name\" required name=\"name\" id=\"name\">\r\n                    <em [hidden]=\"!publisherForm.controls.name?.invalid\" class=\"alert alert-danger\">\r\n                        Name is required\r\n                    </em>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"recipient-name\" class=\"col-form-label\">City:</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"publisher.City\" required name=\"city\">\r\n                    <em [hidden]=\"!publisherForm.controls.city?.invalid\" class=\"alert alert-danger\">\r\n                        City is required\r\n                    </em>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"recipient-name\" class=\"col-form-label\">Country:</label>\r\n                    <select class=\"form-control\" [(ngModel)]=\"publisher.Country\" required name=\"country\">\r\n                        <option value=\"USA\" selected>USA</option>\r\n                        <option value=\"Canada\">Canada</option>\r\n                        <option value=\"Other\">Other</option>\r\n                    </select>\r\n                    <em [hidden]=\"!publisherForm.controls.country?.invalid\" class=\"alert alert-danger\">\r\n                        Country is required\r\n                    </em>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</simple-modal>"

/***/ }),

/***/ "./src/app/book/book-publisher/book-publisher-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/book/book-publisher/book-publisher-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookPublisherModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPublisherModalComponent", function() { return BookPublisherModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var BookPublisherModalComponent = /** @class */ (function () {
    function BookPublisherModalComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookPublisherModalComponent.prototype, "publisher", void 0);
    BookPublisherModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-publisher-modal',
            template: __webpack_require__(/*! ./book-publisher-modal.component.html */ "./src/app/book/book-publisher/book-publisher-modal.component.html")
        })
    ], BookPublisherModalComponent);
    return BookPublisherModalComponent;
}());



/***/ }),

/***/ "./src/app/book/book-publisher/book-publisher.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/book/book-publisher/book-publisher.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" *ngIf=\"!edithasPublisherMode\" class=\"btn btn-outline-primary\" (click)=\"onModalOpen()\">Add the publisher</button>\r\n\r\n<br />\r\n\r\n<div class=\"card w-75\" *ngIf=\"edithasPublisherMode\">\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{publisher.Name}}</h5>\r\n        <p class=\"card-text\">{{publisher.City}}, {{publisher.Country}}</p>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModal()\">Edit</button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onDelete()\">Delete publisher</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<simple-modal [modalTitle]=\"pageTitle\" [modalId]=\"modalId\">\r\n        <div modal-body>\r\n            <form #publisherForm=\"ngForm\" (ngSubmit)=\"onSubmit(publisherForm)\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"recipient-name\" class=\"col-form-label\">Name:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"publisher.Name\" required name=\"name\" id=\"name\">\r\n                        <em *ngIf=\"publisherForm.controls.name?.invalid && publisherForm.controls.name?.dirty\" class=\"alert alert-danger\">\r\n                            Name is required\r\n                        </em>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"recipient-name\" class=\"col-form-label\">City:</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"publisher.City\" required name=\"city\">\r\n                        <em *ngIf=\"publisherForm.controls.city?.invalid && publisherForm.controls.city?.dirty\" class=\"alert alert-danger\">\r\n                            City is required\r\n                        </em>\r\n                    </div>\r\n    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"recipient-name\" class=\"col-form-label\">Country:</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"publisher.Country\" required name=\"country\">\r\n                            <option value=\"USA\" selected>USA</option>\r\n                            <option value=\"Canada\">Canada</option>\r\n                            <option value=\"Other\">Other</option>\r\n                        </select>\r\n                        <em *ngIf=\"publisherForm.controls.country?.invalid && publisherForm.controls.Country?.dirty\" class=\"alert alert-danger\">\r\n                            Country is required\r\n                        </em>\r\n                    </div>\r\n    \r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </simple-modal>\r\n"

/***/ }),

/***/ "./src/app/book/book-publisher/book-publisher.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/book/book-publisher/book-publisher.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookPublisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPublisherComponent", function() { return BookPublisherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _publisher_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher.services */ "./src/app/book/book-publisher/publisher.services.ts");
/* harmony import */ var src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");
/* harmony import */ var src_app_core_interfaces_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/interfaces/jquery */ "./src/app/core/interfaces/jquery.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");






var BookPublisherComponent = /** @class */ (function () {
    function BookPublisherComponent(publisherService, toast, $, activetedRouter) {
        this.publisherService = publisherService;
        this.toast = toast;
        this.$ = $;
        this.activetedRouter = activetedRouter;
        this.pageTitle = 'Book publisher';
        this.modalId = 'publisher-modal';
        this.edithasPublisherMode = false;
        this.publisher = {};
        this.bookId = +this.activetedRouter.snapshot.params["id"];
    }
    BookPublisherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.publisherService.getPublisherByBookId(this.bookId).subscribe(function (resp) {
            if (resp) {
                _this.edithasPublisherMode = true;
                _this.publisher = resp;
            }
            else {
                _this.edithasPublisherMode = false;
            }
        }, function (error) { return _this.toast.error(error); });
    };
    BookPublisherComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            this.publisherService.updatePublisher(this.publisher, this.bookId)
                .subscribe(function (x) {
                _this.$("#" + _this.modalId).modal('hide');
                _this.toast.success("The publisher \"" + _this.publisher.Name + "\" has been successfully updated.");
            }, function (error) { return _this.toast.error(error); });
        }
    };
    BookPublisherComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm("Are you sure to delete the publisher \"" + this.publisher.Name + "\".")) {
            this.publisherService.deletePublisher(this.bookId, this.publisher.Id)
                .subscribe(function (resp) {
                _this.toast.success("The publisher \"" + _this.publisher.Name + "\" has been deleted.");
                _this.publisher = {};
                _this.edithasPublisherMode = false;
            }, function (error) { return _this.toast.error(error); });
        }
    };
    BookPublisherComponent.prototype.openModal = function () {
        this.$("#" + this.modalId).modal('show');
    };
    BookPublisherComponent.prototype.onModalOpen = function () {
        //console.log(this.publisher);
        this.openModal();
        // this.publisherService.getPublisherByBookId(this.bookId).subscribe(resp=>{
        //     this.publisher=resp;
        //     this.openModal();
        // },error=>this.toast.error(error));
    };
    BookPublisherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-publisher',
            template: __webpack_require__(/*! ./book-publisher.component.html */ "./src/app/book/book-publisher/book-publisher.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_3__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_jquery__WEBPACK_IMPORTED_MODULE_4__["JQUERY_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_publisher_services__WEBPACK_IMPORTED_MODULE_2__["PublisherService"], Object, Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], BookPublisherComponent);
    return BookPublisherComponent;
}());



/***/ }),

/***/ "./src/app/book/book-publisher/publisher.services.ts":
/*!***********************************************************!*\
  !*** ./src/app/book/book-publisher/publisher.services.ts ***!
  \***********************************************************/
/*! exports provided: PublisherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherService", function() { return PublisherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");



var PublisherService = /** @class */ (function () {
    function PublisherService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.baseUrl += 'api/publisher';
    }
    PublisherService.prototype.getPublishers = function () {
        return this.http.get(this.baseUrl);
    };
    PublisherService.prototype.getPublisherByBookId = function (bookId) {
        return this.http.get(this.baseUrl + ("/" + bookId));
    };
    PublisherService.prototype.addPublisher = function (publisher, bookId) {
        return this.http.post(this.baseUrl + ("/" + bookId), publisher);
    };
    PublisherService.prototype.updatePublisher = function (publisher, bookId) {
        return this.http.put(this.baseUrl + ("/" + bookId), publisher);
    };
    PublisherService.prototype.deletePublisher = function (bookId, publisherId) {
        return this.http.delete(this.baseUrl + ("/" + publisherId + "/" + bookId));
    };
    PublisherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], PublisherService);
    return PublisherService;
}());



/***/ }),

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
/* harmony import */ var _edit_book_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/book-edit.component */ "./src/app/book/edit/book-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_user_book_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list/user-book-list.component */ "./src/app/book/list/user-book-list.component.ts");
/* harmony import */ var _list_book_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list/book-list-item.component */ "./src/app/book/list/book-list-item.component.ts");
/* harmony import */ var _list_book_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/book-list.component */ "./src/app/book/list/book-list.component.ts");
/* harmony import */ var _book_publisher_book_publisher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./book-publisher/book-publisher.component */ "./src/app/book/book-publisher/book-publisher.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _book_publisher_book_publisher_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./book-publisher/book-publisher-modal.component */ "./src/app/book/book-publisher/book-publisher-modal.component.ts");
















var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_6__["BookDetailComponent"],
                _edit_book_edit_component__WEBPACK_IMPORTED_MODULE_8__["BookEditComponent"],
                _list_user_book_list_component__WEBPACK_IMPORTED_MODULE_10__["UserBookListComponent"],
                _list_book_list_component__WEBPACK_IMPORTED_MODULE_12__["BookListComponent"],
                _list_book_list_item_component__WEBPACK_IMPORTED_MODULE_11__["BookListItemComponent"],
                _book_publisher_book_publisher_component__WEBPACK_IMPORTED_MODULE_13__["BookPublisherComponent"],
                _book_publisher_book_publisher_modal_component__WEBPACK_IMPORTED_MODULE_15__["BookPublisherModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _utilies_utilies_module__WEBPACK_IMPORTED_MODULE_7__["UtilitiesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_book_routes__WEBPACK_IMPORTED_MODULE_5__["BookRoutes"])
            ],
            exports: [
                _list_user_book_list_component__WEBPACK_IMPORTED_MODULE_10__["UserBookListComponent"]
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
/* harmony import */ var _edit_book_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/book-edit.component */ "./src/app/book/edit/book-edit.component.ts");
/* harmony import */ var _list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/book-list.component */ "./src/app/book/list/book-list.component.ts");




var BookRoutes = [
    { path: '', component: _list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"], data: { breadcrumb: 'Books' } },
    { path: 'book/create', component: _edit_book_edit_component__WEBPACK_IMPORTED_MODULE_2__["BookEditComponent"], canActivate: [_detail_book_detail_guard__WEBPACK_IMPORTED_MODULE_1__["BookDetailGuard"]], data: { breadcrumb: 'Edit' } },
    { path: 'edit/:id', component: _edit_book_edit_component__WEBPACK_IMPORTED_MODULE_2__["BookEditComponent"], canActivate: [_detail_book_detail_guard__WEBPACK_IMPORTED_MODULE_1__["BookDetailGuard"]], data: { breadcrumb: 'Edit' } },
    { path: 'book/:id', component: _detail_book_detail_component__WEBPACK_IMPORTED_MODULE_0__["BookDetailComponent"], data: { breadcrumb: 'Details' } },
];


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
        this.baseURl += 'api/book';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.baseURl);
    };
    BookService.prototype.getUserBooks = function () {
        var url = this.baseURl + '/userbooks';
        return this.http.get(url);
    };
    BookService.prototype.getUserBook = function (bookId) {
        var url = this.baseURl + '/userbook/' + bookId;
        return this.http.get(url);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.baseURl + '/' + id;
        return this.http.get(url);
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.baseURl, book);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.baseURl, book);
    };
    BookService.prototype.deleteBook = function (bookId) {
        return this.http.delete(this.baseURl + '/' + bookId);
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

/***/ "./src/app/book/detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book/detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <h3>{{book.Title}}</h3>\r\n <br/>\r\n <div class=\"card mb-12\" style=\"max-width: 940px;\">\r\n     <div class=\"row no-gutters\">\r\n       <div class=\"col-md-4\">\r\n         <img [src]=\"book.PhotoUrl\" *ngIf=\"book.PhotoUrl\" class=\"card-img\" alt=\"...\">\r\n         <img src=\"https://www.on-queue.com/productImages/No_Image.jpg\" *ngIf=\"!book.PhotoUrl\" class=\"card-img\" alt=\"...\">\r\n\r\n       </div>\r\n       <div class=\"col-md-8\">\r\n         <div class=\"card-body\">\r\n           <p class=\"card-text\">Language: {{book.Language}}</p>\r\n           <p class=\"card-text\">Author:</p>\r\n           <ul>\r\n             <li *ngFor=\"let a of book?.Authors\">\r\n               <a [routerLink]=\"['/author/', a.Id]\">{{a.FirstName}} {{a.LastName}}</a>\r\n             </li>\r\n           </ul>\r\n           <p class=\"card-text\">Publisher: {{book?.Publisher?.Name}}</p>\r\n           <p class=\"card-text\">Price: {{book.Price | currency:'USD'}}</p>\r\n \r\n           <p class=\"card-text\"><small class=\"text-muted\">Year: {{book.Year}}</small></p>\r\n           <p class=\"card-text\"><small class=\"text-muted\">ISBN: {{book.ISBN}}</small></p>\r\n           <h5>Description</h5>\r\n           <h5 class=\"card-title\">{{book.Description}}</h5>\r\n         </div>\r\n         <div class=\"card-footer bg-transparent border-success\">\r\n           <button type=\"button\" class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/']\">Go Back</button>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>"

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



/***/ }),

/***/ "./src/app/book/edit/book-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/book/edit/book-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-edit\">\r\n    <h2>{{pageTitle}}</h2>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error has-feedback' :hasError('Title')}\">\r\n            <label for=\"title\">Book title:</label>\r\n            <br />\r\n            <input type=\"text\" id=\"title\" formControlName=\"Title\" required placeholder=\"choose a title...\"\r\n                class=\"form-control\" />\r\n            <span *ngIf=\"hasError('Title')\" class=\"glyphicon glyphicon-remove form-control-feedback\"\r\n                aria-hidden=\"true\"></span>\r\n            <div *ngIf=\"hasError('Title')\" class=\"help-block\">\r\n                Title is a required field: please insert a valid title.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Image\">Book Image:</label>\r\n            <br />\r\n            <input type=\"file\" id=\"PhotoUrl\" formControlName=\"PhotoUrl\" placeholder=\"enter a ISBN...\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"ISBN\">Book ISBN:</label>\r\n            <br />\r\n            <input type=\"text\" id=\"ISBN\" formControlName=\"ISBN\" placeholder=\"enter a ISBN...\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Language\">Book Language:</label>\r\n            <br />\r\n            <select formControlName=\"Language\" class=\"form-control\">\r\n                <option value=\"\">Select a Language</option>\r\n                <option value=\"English\">English</option>\r\n                <option value=\"Spanish\">Spanish</option>\r\n                <option value=\"French\">French</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Price\">Book Price:</label>\r\n            <br />\r\n            <input type=\"number\" id=\"Price\" formControlName=\"Price\" placeholder=\"enter a Price...\"\r\n                class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Year\">Book Year:</label>\r\n            <br />\r\n            <input type=\"text\" id=\"Year\" formControlName=\"Year\" placeholder=\"enter a Year...\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"Description\">Book Description :</label>\r\n            <br />\r\n            <textarea id=\"Description\" formControlName=\"Description\" placeholder=\"enter the description...\"\r\n                class=\"form-control\"></textarea>\r\n        </div>\r\n\r\n         \r\n        <book-publisher></book-publisher>\r\n\r\n         <br/>\r\n        <div class=\"form-group commands\">\r\n            <button *ngIf=\"isEditMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\r\n                Apply Changes\r\n            </button>\r\n            <button *ngIf=\"!isEditMode\" type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-success\">\r\n                Create the book!\r\n            </button>\r\n            <button type=\"button\" *ngIf=\"isEditMode\" (click)=\"onDelete()\" class=\"btn btn-danger\">\r\n                Delete\r\n            </button>\r\n            <button type=\"submit\" [routerLink]=\"['/profile']\" class=\"btn btn-default\">\r\n                Go back\r\n            </button>\r\n         \r\n\r\n        </div>\r\n    </form>\r\n    <!-- <question-list *ngIf=\"editMode\" [quiz]=\"quiz\"></question-list>\r\n\r\n    <result-list *ngIf=\"editMode\" [quiz]=\"quiz\"></result-list> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/book/edit/book-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book/edit/book-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/baseForm */ "./src/app/core/baseForm.ts");
/* harmony import */ var src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");







var BookEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookEditComponent, _super);
    function BookEditComponent(_toastr, bookService, fb, router, activatedRoute) {
        var _this = _super.call(this, _toastr) || this;
        _this.bookService = bookService;
        _this.fb = fb;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.pageTitle;
        _this.book = {};
        _this.isEditMode = _this.activatedRoute.snapshot.routeConfig.path != "book/create";
        _this.pageTitle = _this.isEditMode ? "Edit book" : 'Create book';
        return _this;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isEditMode) {
            var bookId = +this.activatedRoute.snapshot.params["id"];
            this.createForm();
            this.bookService.getUserBook(bookId)
                .subscribe(function (b) {
                _this.book = b;
                _this.updateForm();
            }, function (error) {
                _this.toastr.error(error);
                _this.router.navigate['/profile'];
            });
        }
        else {
            this.createForm();
        }
    };
    BookEditComponent.prototype.updateForm = function () {
        this.form.setValue({
            ISBN: this.book.ISBN,
            PhotoUrl: this.book.PhotoUrl,
            Title: this.book.Title,
            Description: this.book.Description,
            Language: this.book.Language,
            Price: this.book.Price,
            Year: this.book.Year
        });
    };
    BookEditComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            ISBN: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            PhotoUrl: [''],
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Year: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    BookEditComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm("Do you realy want to delete this book \"" + this.book.Title + "\".")) {
            this.bookService.deleteBook(this.book.Id)
                .subscribe(function (resp) {
                _this.toastr.success("The book \"" + _this.book.Title + "\" has been deleted.");
                _this.router.navigate(['/profile']);
            }, function (error) { _this.toastr.error(error.error); });
        }
    };
    BookEditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.form.invalid) {
            if (this.isEditMode) {
                var bookId = this.book.Id;
                this.book = this.form.value;
                this.book.Id = bookId;
                this.bookService.updateBook(this.book).subscribe(function (resp) {
                    _this.toastr.success("The book \"" + _this.book.Title + "\" has been updated successfully.");
                    _this.router.navigate(['/profile']);
                }, function (error) {
                    _this.toastr.error(error.error);
                    console.log(error);
                });
            }
            else {
                this.book = this.form.value;
                this.bookService.addBook(this.book).subscribe(function (resp) {
                    _this.toastr.success("The book \"" + _this.book.Title + "\" has been added successfully.");
                    _this.router.navigate(['/profile']);
                }, function (error) {
                    _this.toastr.error(error.error);
                });
            }
        }
    };
    BookEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book/edit/book-edit.component.html"),
            styles: ["\n       button{\n         margin-left:10px;\n\n       }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], BookEditComponent);
    return BookEditComponent;
}(src_app_core_baseForm__WEBPACK_IMPORTED_MODULE_3__["BaseForm"]));



/***/ }),

/***/ "./src/app/book/list/book-list-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/book/list/book-list-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <img src=\"{{book.PhotoUrl}}\" *ngIf=\"book.PhotoUrl\" width=\"80%\" height=\"300px\" [routerLink]=\"['/book/',book.Id]\">\r\n    <img src=\"https://www.on-queue.com/productImages/No_Image.jpg\" *ngIf=\"!book.PhotoUrl\" width=\"80%\" height=\"300px\" [routerLink]=\"['/book/',book.Id]\">\r\n\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{book.Title}}</h5>\r\n      <p class=\"card-text\">{{book.Description | reduceParagraph:200}}</p>\r\n      <p class=\"card-text\"><small class=\"text-muted\">ISBN:{{book.ISBN}}</small></p>\r\n       <ul>\r\n       <li *ngFor=\"let a of book.Authors\" >\r\n        <a [routerLink]=\"['/author/',a.Id]\">{{a.FirstName}} {{a.LastName}}</a>   \r\n       </li>\r\n       </ul>\r\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\" [routerLink]=\"['/book/',book.Id]\">Detail</button>\r\n      <button type=\"button\" *ngIf=\"isProfile\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/book/edit',book.Id]\">Edit</button>\r\n    </div>\r\n "

/***/ }),

/***/ "./src/app/book/list/book-list-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/list/book-list-item.component.ts ***!
  \*******************************************************/
/*! exports provided: BookListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListItemComponent", function() { return BookListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var BookListItemComponent = /** @class */ (function () {
    function BookListItemComponent() {
        // this.book.PhotoUrl=this.book.PhotoUrl==null?"https://www.on-queue.com/productImages/No_Image.jpg":this.book.PhotoUrl;
        //  console.log(this.book.Title+" "+this.book.PhotoUrl)
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookListItemComponent.prototype, "book", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BookListItemComponent.prototype, "isProfile", void 0);
    BookListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-list-item',
            template: __webpack_require__(/*! ./book-list-item.component.html */ "./src/app/book/list/book-list-item.component.html"),
            styles: ["\n       button{\n           margin-left:5px\n       }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookListItemComponent);
    return BookListItemComponent;
}());



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
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'books',
            //templateUrl:'book-list.component.html'
            template: "\n  <h2> List of books 2</h2>\n  \n  <div class=\"card-deck\">\n    <div class=\"row\">\n     <div class=\"col-4\" *ngFor=\"let b of books\">\n       <book-list-item [book]=\"b\"></book-list-item>\n     </div>\n     </div>\n   </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book/list/user-book-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/list/user-book-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserBookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBookListComponent", function() { return UserBookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book.service */ "./src/app/book/book.service.ts");
/* harmony import */ var src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/interfaces/toastr */ "./src/app/core/interfaces/toastr.ts");




var UserBookListComponent = /** @class */ (function () {
    function UserBookListComponent(bookService, toastr) {
        this.bookService = bookService;
        this.toastr = toastr;
        this.isProfile = false;
    }
    UserBookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getUserBooks().subscribe(function (books) {
            _this.books = books;
        }, function (error) {
            _this.toastr.error(error.error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UserBookListComponent.prototype, "isProfile", void 0);
    UserBookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-book-list',
            template: "\n    <h2> Your list of books </h2>\n    <br/>\n    <button type=\"button\" [routerLink]=\"['/book/create']\" class=\"btn btn-primary btn-sm\">Add new book</button>\n    <br/>\n    <br/>\n\n    <div class=\"card-deck\">\n      <div class=\"row\">\n\n       <div class=\"col-4\" *ngFor=\"let b of books\">\n       <book-list-item [book]=\"b\" [isProfile]=\"isProfile\"></book-list-item>\n       </div>\n       </div>\n     </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_interfaces_toastr__WEBPACK_IMPORTED_MODULE_3__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], Object])
    ], UserBookListComponent);
    return UserBookListComponent;
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

/***/ "./src/app/core/interfaces/jquery.ts":
/*!*******************************************!*\
  !*** ./src/app/core/interfaces/jquery.ts ***!
  \*******************************************/
/*! exports provided: JQUERY_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQUERY_TOKEN", function() { return JQUERY_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var JQUERY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('jQuery');


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

module.exports = "<!-- <header>\r\n    <nav class='navbar navbar-expand-lg navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>kernys.Library.Web</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n          [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n          <ul class=\"navbar-nav flex-grow\">\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n              <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Books</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                <a class=\"nav-link text-dark\" [routerLink]='[\"/authors\"]'>Authors</a>\r\n              </li>\r\n          </ul>\r\n          <form class=\"form-inline my-2 my-lg-0\">\r\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form>\r\n        </div>\r\n      \r\n      </div>\r\n   \r\n    </nav>\r\n  </header>\r\n   -->\r\n  <header>\r\n   <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>Kernys</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item active\" [routerLinkActive]='[\"active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link\" [routerLink]='[\"/\"]'>Books <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link\" [routerLink]='[\"/authors\"]'>Authors</a>\r\n          </li>\r\n          <!-- <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Dropdown\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n          </li> -->\r\n        </ul>\r\n      \r\n        <ul class=\"navbar-nav flex-row ml-md-auto d-md-flex\">\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-item nav-link mr-md-2\" [routerLink]=\"['account/login']\"  *ngIf=\"!auth\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Login \r\n                  </a>\r\n                   \r\n              <a class=\"nav-item nav-link dropdown-toggle mr-md-2\" *ngIf=\"auth\" href=\"#\" id=\"bd-versions\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Welcome {{auth.DisplayName}}\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right\" *ngIf=\"auth\" aria-labelledby=\"bd-versions\">\r\n                <a class=\"dropdown-item active\" [routerLink]='[\"/profile\"]'>Profile</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"https://v4-alpha.getbootstrap.com/\">v4 Alpha 6</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\"  [routerLink]=\"['account/logout']\">Log Out</a>\r\n              </div>\r\n            </li>\r\n        \r\n            <!-- <li class=\"nav-item\">\r\n              <a class=\"nav-link p-2\" href=\"https://github.com/twbs/bootstrap\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"navbar-nav-svg\" viewBox=\"0 0 512 499.36\" role=\"img\" focusable=\"false\"><title>GitHub</title><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\"></path></svg></a>\r\n            </li> -->\r\n        \r\n          </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>\r\n  </header>"

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
/* harmony import */ var _error_404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/404 */ "./src/app/error/404.ts");
/* harmony import */ var _security_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security/login/login.component */ "./src/app/security/login/login.component.ts");
/* harmony import */ var _security_login_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/login/logout.component */ "./src/app/security/login/logout.component.ts");
/* harmony import */ var _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/sign-up/sign-up.component */ "./src/app/security/sign-up/sign-up.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.guard */ "./src/app/profile/profile.guard.ts");






var LibraryRoutes = [
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_profile_profile_guard__WEBPACK_IMPORTED_MODULE_5__["ProfileGuard"]] },
    { path: 'book', loadChildren: './book/book.module#BookModule', data: { breadcrumb: 'Book' } },
    { path: 'books', loadChildren: './book/book.module#BookModule', data: { breadcrumb: 'Book' } },
    { path: 'author', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Author' } },
    { path: 'authors', loadChildren: './author/author.module#AuthorModule', data: { breadcrumb: 'Authors' } },
    { path: '404', component: _error_404__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
    { path: 'account/logout', component: _security_login_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] },
    { path: 'account/login', component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], data: { breadcrumb: 'Login' } },
    { path: 'account/signup', component: _security_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], data: { breadcrumb: 'Sign up' } },
    //{ path:'', loadChildren: './book/book.module#BookModule',  pathMatch:'full', data: {breadcrumb: 'Book' } },
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My profile</h1>\r\n\r\n<user-book-list [isProfile]=\"isProfile\"></user-book-list>"

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
        this.isProfile = true;
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

/***/ "./src/app/profile/profile.guard.ts":
/*!******************************************!*\
  !*** ./src/app/profile/profile.guard.ts ***!
  \******************************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/security.service */ "./src/app/security/security.service.ts");




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
    ProfileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _security_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
    ], ProfileGuard);
    return ProfileGuard;
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

/***/ "./src/app/shared/components/simple-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/simple-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: SimpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return SimpleModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var SimpleModalComponent = /** @class */ (function () {
    function SimpleModalComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SimpleModalComponent.prototype, "modalTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SimpleModalComponent.prototype, "modalId", void 0);
    SimpleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'simple-modal',
            template: "\n  \n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"{{modalId}}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n       <h5 class=\"modal-title\">{{modalTitle}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n       <ng-content select=\"[modal-body]\"></ng-content>\n    </div>\n  </div>\n</div>\n\n  "
        })
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_simple_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/simple-modal.component */ "./src/app/shared/components/simple-modal.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [
                _components_simple_modal_component__WEBPACK_IMPORTED_MODULE_4__["SimpleModalComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_simple_modal_component__WEBPACK_IMPORTED_MODULE_4__["SimpleModalComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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