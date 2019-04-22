import { FormGroup } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from './interfaces/toastr';
import { Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class BaseForm {

    public form: FormGroup;
    public toastr:Toastr;
    constructor(@Inject(TOASTR_TOKEN) private _toastr:Toastr) {
       // this.form = _form;
       this.toastr=_toastr;
    }


   formIsValid(){
       return this.form.valid;
   }

     //retrieve a FormControl
  getFormControlValue(name:string){
    return this.form.get(name).value;
}
  //retrieve a FormControl
  getFormControl(name:string){
      return this.form.get(name);
  }

  //return True if the formcontrol is valid
  isValid(name:string){

    let e=this.getFormControl(name);
    return e && e.valid;
  }
//returns true if the formcontrl has been changed
isChanged(name:string){
    let e =this.getFormControl(name);
    return e && (e.dirty || e.touched);
}

//return True if the FormControl is invalid after user changes
hasError(name:string){
    let e=this.getFormControl(name);
    return e && (e.dirty || e.touched) && !e.valid;
}

 
handlerError(err: HttpErrorResponse):string {

   let errorMessage = '';
   if (err.error instanceof ErrorEvent) {

       //client side or network error occurred.
       errorMessage=`Error: ${err.error.message}`;
       this.toastr.error(errorMessage);
       

   } else {
       //The backend returned an unsuccesful response code.
       errorMessage=`Server error code: ${err.status}, error message is: ${err.error}`;
      this.toastr.error(err.error,  `Error: ${err.status} ${err.statusText}`)
   }

   return errorMessage;
}



}
