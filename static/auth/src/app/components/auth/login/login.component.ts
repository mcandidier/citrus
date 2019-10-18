import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { validateAllFormFields } from '../../../common/utils';
import { Observable } from 'rxjs';

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

  onSubmit() {
    if (this.form.valid) {
      console.log('valid');
      console.log(this.form.value);
      this.authService.login(this.form.value)
        .subscribe( res => {
          this.authService.setToken(res['token']);
        }, error => {
          this.errorMsg = true;
        });
    } else {
      validateAllFormFields(this.form);
    }
  }
}
