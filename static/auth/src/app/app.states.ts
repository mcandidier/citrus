import { Transition, Obj } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LoginRequired, IsAnonymous } from './common/security';


export const loginState: Object = {
    name: 'login',
    url: '/login',
    component: LoginComponent,
    onEnter: IsAnonymous,
};

export const registerState: Object = {
    name: 'register',
    url: '/register',
    component: RegisterComponent,
    onEnter: IsAnonymous,
};

export const updateDashboard: Object = {
    name: 'update',
    url: '/update',
    component: UpdateProfileComponent,
    onEnter: LoginRequired,
};

export const dashboardState: Object = {
    name: 'dashboard',
    url: '/dashboard',
    component: DashboardComponent,
    onEnter: LoginRequired,
};

export const APP_STATES: Object[] = [
    loginState,
    registerState,
    updateDashboard,
    dashboardState
]
