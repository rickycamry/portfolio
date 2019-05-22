import { Component, OnInit, Inject } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseForm } from 'src/app/core/baseForm';
import { TOASTR_TOKEN, Toastr } from 'src/app/core/interfaces/toastr';
import { BookService } from '../book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './book-edit.component.html',
    styles: [`
       button{
         margin-left:10px;

       }
    `

    ]

})
export class BookEditComponent extends BaseForm implements OnInit {

    book: Book;
    pageTitle: string;
    form: FormGroup;
    isEditMode: boolean;

    constructor(@Inject(TOASTR_TOKEN) _toastr: Toastr,
        private bookService: BookService,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        super(_toastr);
        this.pageTitle;
        this.book = <Book>{};

        this.isEditMode = this.activatedRoute.snapshot.routeConfig.path != "book/create";

        this.pageTitle = this.isEditMode ? `Edit book` : 'Create book';


    }

    ngOnInit() {

        if (this.isEditMode) {
            let bookId = +this.activatedRoute.snapshot.params["id"];
            this.createForm();
            this.bookService.getUserBook(bookId)
                .subscribe(b => {
                this.book = b;
                    this.updateForm();
                },
                    error => {
                        this.toastr.error(error);
                        this.router.navigate['/profile'];
                    });

        } else {
            this.createForm();
        }

    }

    updateForm() {

        this.form.setValue({
            ISBN: this.book.ISBN,
            PhotoUrl :this.book.PhotoUrl,
            Title: this.book.Title,
            Description: this.book.Description,
            Language: this.book.Language,
            Price: this.book.Price,
            Year: this.book.Year

        });

    }
    createForm() {

        this.form = this.fb.group({
            ISBN: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
            PhotoUrl:[''],
            Title: ['', [Validators.required]],
            Description: ['', [Validators.required]],
            Language: ['', [Validators.required]],
            Price: [0, [Validators.required]],
            Year: [0, [Validators.required]],
        });


    }

    onDelete() {

        if (confirm(`Do you realy want to delete this book "${this.book.Title}".`)) {

            this.bookService.deleteBook(this.book.Id)
                .subscribe(resp => {
                    this.toastr.success(`The book "${this.book.Title}" has been deleted.`);
                    this.router.navigate(['/profile']);
                },
                    error => { this.toastr.error(error.error) });
        }

    }

    onSubmit() {

        if (!this.form.invalid) {

            if (this.isEditMode) {

            let bookId:number=this.book.Id;
            this.book = this.form.value as Book;
            this.book.Id=bookId;

                this.bookService.updateBook(this.book).subscribe(resp => {

                    this.toastr.success(`The book "${this.book.Title}" has been updated successfully.`);
                    this.router.navigate(['/profile']);

                }, error => {
                    this.toastr.error(error.error);
                    console.log(error)
                })

            } else {
                this.book = this.form.value as Book;
                this.bookService.addBook(this.book).subscribe(resp => {

                    this.toastr.success(`The book "${this.book.Title}" has been added successfully.`);
                    this.router.navigate(['/profile']);

                }, error => {
                    this.toastr.error(error.error);
                })

            }

        }

    }


}