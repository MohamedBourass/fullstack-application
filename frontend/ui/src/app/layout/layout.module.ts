import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [TopbarComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    RouterModule
    ],
  exports: [TopbarComponent, NavbarComponent, FooterComponent]
})
export class LayoutModule { }
