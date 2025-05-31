import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  /*user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: data => {
        this.user = data;
        console.log('User connected: ', this.user);
      },
      error: err => {
        console.error('Error when retrieve the user: ', err);
      }
    });
  }*/

  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken(); //Check if the token exists
  }

  logout() {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
  }
}
