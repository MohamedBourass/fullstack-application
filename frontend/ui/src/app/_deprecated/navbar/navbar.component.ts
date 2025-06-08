import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private tokenStorage: TokenStorageService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
  }
}
