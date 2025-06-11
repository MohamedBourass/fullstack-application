import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {

  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isAuthenticated$;
  }

  goHome(): void {
    this.router.navigate(['/']); // Redirige vers la page d'accueil
  }

  goToLogin(): void {
    this.router.navigate(['/login']); // Redirection vers la page de connexion
  }

}
