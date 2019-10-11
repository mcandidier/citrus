import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private errorMsg: Boolean;

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
    if (this.form.valid) {
      console.log('valid');
      console.log(this.form.value);
      this.authService.login(this.form.value)
        .subscribe(res => {
          localStorage.setItem('access-token', res['token']);
        }, error => {
          this.errorMsg = true;
        });
    } else {
      this.validateAllFormFields(this.form);
    }
  }

}
