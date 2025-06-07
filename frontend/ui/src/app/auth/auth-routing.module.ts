import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  //{ path: '', component: AuthComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: { requiresAuth: false } },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { requiresAuth: false } },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
