import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { PublisherService } from './publisher.services';
import { TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
import { JQUERY_TOKEN } from 'src/app/core/interfaces/jquery';
import { ActivatedRoute } from '@angular/router';
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
    BookPublisherComponent = tslib_1.__decorate([
        Component({
            selector: 'book-publisher',
            templateUrl: 'book-publisher.component.html'
        }),
        tslib_1.__param(1, Inject(TOASTR_TOKEN)),
        tslib_1.__param(2, Inject(JQUERY_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [PublisherService, Object, Object, ActivatedRoute])
    ], BookPublisherComponent);
    return BookPublisherComponent;
}());
export { BookPublisherComponent };
//# sourceMappingURL=book-publisher.component.js.map