import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryListComponent } from './country-list/country-list.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
//import { AuthGuard } from './auth/auth.guard';

import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'all', pathMatch: 'full' },
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'ag-grid', component: CountryListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spreadsheet', component: SpreadsheetComponent },
  { path: 'profile', component: ProfileComponent }
  //{ path: 'svg', component: SvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
