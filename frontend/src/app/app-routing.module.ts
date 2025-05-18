import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'ag-grid', component: ProductListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: "spreadsheet", component: SpreadsheetComponent },
  //{ path: 'svg', component: SvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
