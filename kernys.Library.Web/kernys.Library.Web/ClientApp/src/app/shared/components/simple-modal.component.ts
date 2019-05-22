import { Component, Input } from '@angular/core';

 

@Component({
  selector:'simple-modal',
  template:`
  
  <div class="modal" tabindex="-1" role="dialog" id="{{modalId}}">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <h5 class="modal-title">{{modalTitle}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <ng-content select="[modal-body]"></ng-content>
    </div>
  </div>
</div>

  `

})
export class SimpleModalComponent{

    @Input() modalTitle:string;
    @Input() modalId:string;



}