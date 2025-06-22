import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'register'
    , component: RegisterComponent
    //, canActivate: [AuthGuard]
    //, data: { requiresAuth: false }
  },
  {
    path: 'login'
    , component: LoginComponent
    //, canActivate: [AuthGuard],
    //, data: { requiresAuth: false }
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
