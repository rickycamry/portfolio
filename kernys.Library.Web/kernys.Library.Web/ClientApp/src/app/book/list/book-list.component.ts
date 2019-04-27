import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";



import { Book } from "../../core/interfaces/book";
import { BookService } from '../book.service';
import { BookListItemComponent } from './book-list-item.component';

@Component({
  selector:'books',
  //templateUrl:'book-list.component.html'
  template:`
  <h2> List of books 2</h2>
  
  <div class="card-deck">
    <div class="row">
     <div class="col-4" *ngFor="let b of books">
       <book-list-item [book]="b"></book-list-item>
     </div>
     </div>
   </div>
  `

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

 

}