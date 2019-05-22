import { Component, Input } from '@angular/core';
import { Publisher } from 'src/app/core/interfaces/publisher';

@Component({
  selector:'book-publisher-modal',
  templateUrl:'./book-publisher-modal.component.html'

})
export class BookPublisherModalComponent{
    
   @Input() publisher:Publisher;
   




}