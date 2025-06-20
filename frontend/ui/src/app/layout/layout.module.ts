import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [HeaderComponent
    , FooterComponent
    , SidenavComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    ]
  ,exports: [HeaderComponent
    , FooterComponent
    , SidenavComponent
    ]
})
export class LayoutModule { }
