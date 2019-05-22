import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseForm } from 'src/app/core/baseForm';
import { TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';
var BookEditComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BookEditComponent, _super);
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
            ISBN: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
            PhotoUrl: [''],
            Title: ['', [Validators.required]],
            Description: ['', [Validators.required]],
            Language: ['', [Validators.required]],
            Price: [0, [Validators.required]],
            Year: [0, [Validators.required]],
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
    BookEditComponent = tslib_1.__decorate([
        Component({
            templateUrl: './book-edit.component.html',
            styles: ["\n       button{\n         margin-left:10px;\n\n       }\n    "
            ]
        }),
        tslib_1.__param(0, Inject(TOASTR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [Object, BookService,
            FormBuilder,
            Router,
            ActivatedRoute])
    ], BookEditComponent);
    return BookEditComponent;
}(BaseForm));
export { BookEditComponent };
//# sourceMappingURL=book-edit.component.js.map