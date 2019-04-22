import { Component, OnInit } from "@angular/core";
import { Book } from "../core/interfaces/book";
import { BookService } from "./book.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./book-detail.component.html'

})
export class BookDetailComponent implements OnInit{
  
    book:Book;

    constructor(private bookService:BookService,
                private actRoute:ActivatedRoute){

    }
 
    ngOnInit(){
        let bookId:number=+this.actRoute.snapshot.params["id"];

        this.bookService.getBook(bookId).subscribe(x=>
            this.book=x
            );

    }

}