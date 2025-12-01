import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Todolist } from './todolist/todolist';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'profile', component: Profile },
    { path: 'todos', component: Todolist },
    
];
