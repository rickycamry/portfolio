import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BookRoutes } from './book.routes';
import { BookDetailComponent } from './detail/book-detail.component';
import { UtilitiesModule } from '../utilies/utilies.module';
import { BookCreateComponent } from './create/book-create.component';
import { BookEditComponent } from './edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserBookListComponent } from './list/user-book-list.component';
import { BookListItemComponent } from './list/book-list-item.component';
import { BookListComponent } from './list/book-list.component';

@NgModule({

    declarations:[
        BookDetailComponent,
        BookCreateComponent,
        BookEditComponent,
        UserBookListComponent,
        BookListComponent,
        BookListItemComponent,
    

    ],
    imports:[
        CommonModule,
        HttpClientModule,
        UtilitiesModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(BookRoutes)
    ],
    exports:[ 
        UserBookListComponent
    ]
})
export class BookModule{

}