import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, Form } from '@angular/forms';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.sass']
})
export class UpdateProfileComponent implements OnInit {
  form: FormGroup;
  profile: FormControl;
  image: any;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      profile: new FormControl('', Validators.required),
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  onSubmit() {
    if(this.form.valid) {
      const formData = new FormData();
      formData.append('profile', this.image);
      this.authService.update(formData);
    } else {
      console.log('error');
    }
  }
}
