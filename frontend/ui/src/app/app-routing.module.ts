import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { CountryListComponent } from './modules/country-list/country-list.component';
import { SpreadsheetComponent } from './modules/spreadsheet/spreadsheet.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ag-grid', component: CountryListComponent },
  { path: 'spreadsheet', component: SpreadsheetComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) },
  //{ path: '**', redirectTo: '/error/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
