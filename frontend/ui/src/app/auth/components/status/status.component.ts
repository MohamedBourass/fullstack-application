import { Component, Input } from '@angular/core';
import { Status } from 'src/app/auth/status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() status: Status = 'initial';
}
