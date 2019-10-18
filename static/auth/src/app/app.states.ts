import { Transition, Obj } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const loginState: Object = {
    name: 'login',
    url: '/login',
    component: LoginComponent,
    onEnter: function (){
        console.log('on enter');
    }
};

export const registerState: Object = {
    name: 'register',
    url: '/register',
    component: RegisterComponent
};

export const DashboardState: Object = {
    name: 'dashboard',
    url: '/dashboard',
    component: UpdateProfileComponent
}
export const APP_STATES = [
    loginState,
    registerState,
    DashboardState,
];

