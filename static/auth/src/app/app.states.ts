import { Transition, Obj } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


export const loginState: Object = {
    name: 'login',
    url: '/login',
    component: LoginComponent
};


export const registerState: Object = {
    name: 'register',
    url: '/register',
    component: RegisterComponent
};

export const APP_STATES = [
    loginState,
    registerState
];

