import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { StatusComponent } from './components/status/status.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';


@NgModule({
  declarations: [
    LoginComponent
    , RegisterComponent
    , StatusComponent
    , UnauthorizedComponent
    , LogoutConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule
  ]
  ,exports: [
    LoginComponent
    , RegisterComponent
    , StatusComponent
    , UnauthorizedComponent
    , LogoutConfirmationDialogComponent
  ]
})
export class AuthModule { }
