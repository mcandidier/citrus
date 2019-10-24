import { AuthService } from '../services/auth.service';

export function LoginRequired(t, state) {
    const $state = t.router.stateService;
    const nextUrl = state.url;
    const auth = t.injector().get(AuthService);
    const isAuthenticated = auth.isAuthenticated();
    if (isAuthenticated === null ) {
        $state.go('login');
    }
}


export function IsAnonymous(t, state) {
    const $state = t.router.stateService;
    const auth = t.injector().get(AuthService);
    const isAnonymous = auth.isAnonymous();
    if (isAnonymous) {
        $state.go('login');
    } else {
        $state.go('dashboard');
    }
}