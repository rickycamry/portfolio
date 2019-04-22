import { Component, OnInit } from '@angular/core';

import { Author } from '../core/interfaces/author';
import { AuthorService } from './author.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl:'author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit{

 author:Author;

 constructor(private authorService:AuthorService,
             private activeRoute:ActivatedRoute){

 
  }

  ngOnInit(){

    let authorId:number=+this.activeRoute.snapshot.params["id"];

   this.authorService.getAuthor(authorId).subscribe(x=>this.author=x);    

  }

}