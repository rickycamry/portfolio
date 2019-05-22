import { NgModule } from "@angular/core";
import { AuthorListComponent } from "./author-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { authorRoutes } from "./author.routes";
import { HttpClientModule } from "@angular/common/http";
import { AuthorDetailsComponent } from './author-details.component';
import { UtilitiesModule } from '../utilies/utilies.module';


@NgModule({
  declarations:[
    AuthorListComponent,
    AuthorDetailsComponent
  ], 
  imports:[
     CommonModule,
     HttpClientModule,
     UtilitiesModule,
     RouterModule.forChild(authorRoutes)
    ],
    providers:[
       
    ]
})
export class AuthorModule{

}