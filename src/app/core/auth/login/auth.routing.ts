import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const AuthRoutes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'Login' } },
];
