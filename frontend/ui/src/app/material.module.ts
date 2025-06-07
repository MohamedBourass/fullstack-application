import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule
  ],
})
export class MaterialModule {}
