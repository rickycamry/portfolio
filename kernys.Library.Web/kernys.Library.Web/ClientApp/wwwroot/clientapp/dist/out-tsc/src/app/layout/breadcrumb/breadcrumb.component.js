import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from "@angular/router";
import { filter } from "rxjs/operators";
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
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function () {
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
            if (child.outlet !== PRIMARY_OUTLET) {
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
    BreadcrumbComponent = tslib_1.__decorate([
        Component({
            selector: "breadcrumb",
            template: "\n<nav aria-label=\"breadcrumb\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n    <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\">\n    <a [routerLink]=\"[breadcrumb.url]\">{{ breadcrumb.label }}</a>\n    </li>\n   </ol>\n   <button (click)=\"showArray()\">show array</button>\n</nav>     \n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map