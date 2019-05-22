import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { SignUp } from 'src/app/core/interfaces/sign-up';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { BaseForm } from 'src/app/core/baseForm';
import { Toastr, TOASTR_TOKEN } from 'src/app/core/interfaces/toastr';
import { tap, catchError } from 'rxjs/operators';

@Component({
  templateUrl: 'sign-up.component.html',
  styles: [`
  .text-muted {
    color: #ff3333!important;
              }`]

})
export class SignUpComponent extends BaseForm implements OnInit {


  pageTitle: string = 'Sign up';
  errorMessage:string='';

  constructor(private fb: FormBuilder,
    private router: Router,
    private securityService: SecurityService,
    @Inject(TOASTR_TOKEN)  _toastr:Toastr) {
    super(_toastr);

  }

  ngOnInit() {
    this.load();
  }


  load() {

    this.form = this.fb.group({
      Username: ['', Validators.required],
      DisplayName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', [Validators.required]]
    });

  }

  onSubmit() {
   

  
    if (this.formIsValid()) {
      let signUp = this.form.value as SignUp;

 
      this.securityService.signUp(signUp).subscribe(resp=>{
        this.router.navigate(['/account/login']);
      }, error=>this.errorMessage=this.handlerError(error));
 
    }

  }

  onCancel() {
    this.router.navigate(['/account/login']);
  }


//  validForm(pass:string,confPas:string){

//   return !this.confirmPasswordInValid(pass,confPas) 
//  }

  confirmPasswordInValid(pass:string,confPas:string):boolean{

//  /this.getFormControlValue(pass)==this.getFormControlValue(confPas)) 

  return  (this.getFormControlValue(pass)!==this.getFormControlValue(confPas))  && this.isChanged(confPas);

  }




}