import { Routes } from '@angular/router';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'about', component: About},
    { path: 'profile', component: Profile},
    { path: 'login', component: Login},
];
