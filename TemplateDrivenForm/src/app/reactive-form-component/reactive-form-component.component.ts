import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: 'TemplateDrivenForm/src/app/reactive-form-component.html'
})
export class ReactiveFormComponentComponent {
  registrationForm: FormGroup;

  constructor(public fb: FormBuilder) {

    this.registrationForm = fb.group({
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,Validators.pattern("/^[a-z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i")])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })

  }

  submitRegistration(value: Object): void {
    console.log(value);
  }

}
