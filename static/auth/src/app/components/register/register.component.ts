import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public password2: FormControl;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.password2 = new FormControl('', [Validators.required, this.validatePassword(this.password)]);

    this.form = this.fb.group({
      username: this.username,
      password: this.password,
      password2: this.password2
    });
  }

  validatePassword(pass1: any) {
    return (control: AbstractControl) => {
      return pass1 === control.value ? null : {'mismatch': true};
    };
  }

  public onSubmit() {
    console.log(this.form.valid, 'blah');
    if (this.form.valid) {
      this.authService.register(this.form.value);
    }
  }
}
