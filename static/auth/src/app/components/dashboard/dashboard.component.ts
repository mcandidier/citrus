import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private state: StateService) { }

  ngOnInit() {
    console.log('hello dashboard balhadafd');
    const isAuthenticated = this.authService.isAuthenticated();
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      console.log('afdafas');
      console.log(this.state, 'state')
      this.state.go('login');
    }
  }
}
