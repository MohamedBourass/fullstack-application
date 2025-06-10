import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const requiresAuth = route.data['requiresAuth'] ?? true;

    if(requiresAuth) {
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      if (!this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']); // Redirection si connecté
        return false;
      }
    }
  }
}
