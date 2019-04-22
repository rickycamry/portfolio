import { NgModule } from '@angular/core';

import { ReduceParagraphPipe } from './pipes/reduce-paragraph.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  
    imports:[
         CommonModule
    ],
    declarations:[
        ReduceParagraphPipe
    ],
    exports:[ReduceParagraphPipe]

})
export class UtilitiesModule{

}