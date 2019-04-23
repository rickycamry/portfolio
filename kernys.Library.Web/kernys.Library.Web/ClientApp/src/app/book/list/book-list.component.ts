import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


import { Book } from "../../core/interfaces/book";
import { BookService } from '../book.service';

@Component({
  selector:'books',
  templateUrl:'book-list.component.html'

})
export class BookListComponent implements OnInit{
  
  books:Book[];
   
  constructor(private bookService:BookService,
              private route:Router){}

  
  ngOnInit(){
  
 this.bookService.getBooks().subscribe(x=>{
   
  this.books=x;
});
 
 

  }

  handleDetail(b:Book){
    
    this.route.navigate(['/book/',b.Id]);
    
  }

}