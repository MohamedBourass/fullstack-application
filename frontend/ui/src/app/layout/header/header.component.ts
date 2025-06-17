import { Component, Input, OnDestroy, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
//import { IsLoggedDirective } from 'src/app/auth/directives/is-logged.directive';
import { AuthService } from 'src/app/core/auth.service';
import { LogoutConfirmationDialogComponent } from 'src/app/auth/components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { EMPTY, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  @Input() title!: string;
  /* Injection */
  //authService = inject(AuthService);
  /* Observables */
  currentUser$;
  /* Events */
  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    public dialog: MatDialog
  ) {
    this.currentUser$ = this.authService.currentUser$;
    }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logout(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent);
    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroy$))
      .subscribe(result => {
        if(result) {
          this.authService.logout();
        }
    });
  }
}
