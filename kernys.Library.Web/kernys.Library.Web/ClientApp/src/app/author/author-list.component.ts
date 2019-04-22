import {Component, OnInit} from '@angular/core';

import { Author } from '../core/interfaces/author';
import { AuthorService } from './author.service';

@Component({
    template:`
<h1>List of authors</h1>
 
<div class="card mb-3" *ngFor="let a of authors"  style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img [src]="a.PhotoUrl" alt="{{a.FirstName}} {{a.LastName}}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{a.FirstName}} {{a.LastName}}</h5>
        <p class="card-text">{{a.Biography | reduceParagraph:100}}</p>
      </div>
    </div>

  </div>
  <button type="button" class="btn btn-primary btn-sm" [routerLink]="['/author/', a.Id]">Detail</button>

</div>
    `
})
export class AuthorListComponent implements OnInit{
    
    authors:Author[];
    pageTitle:string;
    constructor(private authorService:AuthorService){
            
    }


    ngOnInit(){
        
       this.authorService.getAuthors().subscribe(x=>this.authors=x);
    }


}