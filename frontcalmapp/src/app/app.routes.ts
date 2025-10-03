import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { segGuard } from './guards/seguridad.guard';
import { Lobby } from './components/lobby/lobby';
import { Test } from './components/student/test/test';

export const routes: Routes = [
{
        path: 'home',component:Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    
    },
    {
        path: 'signup',
        component: Signup
    
    },
    {
        path: 'lobby',
        component: Lobby,
        canActivate: [segGuard]
        
    },
    {
        path: 'test',
        component: Test,
        canActivate: [segGuard]
        
    }

];
