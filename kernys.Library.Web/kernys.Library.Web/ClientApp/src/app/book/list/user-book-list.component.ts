
import { Component, OnInit, Inject, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/core/interfaces/book';
import { TOASTR_TOKEN, Toastr } from 'src/app/core/interfaces/toastr';


@Component({
    selector:'user-book-list',
    template:`
    <h2> Your list of books </h2>
    <br/>
    <button type="button" [routerLink]="['/book/create']" class="btn btn-primary btn-sm">Add new book</button>
    <br/>
    <br/>

    <div class="card-deck">
      <div class="row">

       <div class="col-4" *ngFor="let b of books">
       <book-list-item [book]="b" [isProfile]="isProfile"></book-list-item>
       </div>
       </div>
     </div>
    `
})
export class UserBookListComponent implements OnInit{

    books:Book[];
    @Input() isProfile:boolean=false;
         
    constructor(private bookService:BookService,
                @Inject(TOASTR_TOKEN) private toastr:Toastr){

    }


    ngOnInit(){
      
        this.bookService.getUserBooks().subscribe(books=>{
           
            this.books=books;

        },error=>{
          this.toastr.error(error.error);
        })
       
    }
    
 



}