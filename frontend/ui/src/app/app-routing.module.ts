import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'ag-grid', component: UserListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spreadsheet', component: SpreadsheetComponent },
  //{ path: 'svg', component: SvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
