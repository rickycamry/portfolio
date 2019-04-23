import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BookRoutes } from './book.routes';
import { BookDetailComponent } from './detail/book-detail.component';
import { UtilitiesModule } from '../utilies/utilies.module';
import { BookCreateComponent } from './create/book-create.component';

@NgModule({

    declarations:[
        BookDetailComponent,
        BookCreateComponent

    ],
    imports:[
        CommonModule,
        HttpClientModule,
        UtilitiesModule,
        RouterModule.forChild(BookRoutes)
    ]
})
export class BookModule{

}