import { Component, OnInit } from '@angular/core';
import { LoginModel } from './../../models/login.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent { 
    user: LoginModel = new LoginModel()
    registrationForm: FormGroup;
    hide = true
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.registrationForm = this.formBuilder.group({
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
      })
    }
}
