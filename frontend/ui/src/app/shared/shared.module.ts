import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditComponent } from './components/audit/audit.component';
import { ChunkPipe } from './pipes/chunk.pipe';
import { CountPipe } from './pipes/count.pipe';

@NgModule({
  declarations: [
    AuditComponent,
    ChunkPipe,
    CountPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
