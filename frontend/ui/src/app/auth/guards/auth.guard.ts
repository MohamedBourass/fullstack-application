import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const requiresAuth = route.data['requiresAuth'] ?? true;

    if(requiresAuth) {
      if (this.authService.isAuthenticated$) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      if (!this.authService.isAuthenticated$) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }
  }
}
