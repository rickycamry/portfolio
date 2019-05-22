import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleModalComponent } from './components/simple-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SimpleModalComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        SimpleModalComponent
    ]
})
export class SharedModule { }