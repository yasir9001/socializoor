import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './../../models/register.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel()
  registrationForm: FormGroup;
  hide = true
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: [this.user.email, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    })
  }
}
