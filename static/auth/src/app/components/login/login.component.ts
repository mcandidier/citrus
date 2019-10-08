import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService:AuthService ) { }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) { 
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    console.log('submit');
    if (this.form.valid) {
      console.log('valid');
      console.log(this.form.value);
      this.authService.login(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

}
