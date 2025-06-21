import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() title!: string;

  private year = new Date().getFullYear();

  project = 'Ticket management system';
  copyrightLine1 = `Powered by MBO ©${this.year}.`;
  copyrightLine2 = 'Built with ❤️ In Morocco';
}
