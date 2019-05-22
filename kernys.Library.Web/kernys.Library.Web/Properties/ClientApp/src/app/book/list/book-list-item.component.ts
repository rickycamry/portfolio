import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/interfaces/book';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'book-list-item',
    templateUrl:'./book-list-item.component.html',
    styles:[`
       button{
           margin-left:5px
       }
    `]
})
export class BookListItemComponent {

    @Input() book:Book;
    @Input() isProfile:boolean;

   
    


}