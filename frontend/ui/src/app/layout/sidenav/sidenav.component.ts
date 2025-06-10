import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  /* Events */
  private destroy$ = new Subject<void>();
  /* States */
  isOpen!: boolean;

  constructor(
    //private cartService: CartService
  ){}

  /*ngOnInit(): void {
    this.cartService.opened$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(x => this.sidenav.opened = x)
  }*/

ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
