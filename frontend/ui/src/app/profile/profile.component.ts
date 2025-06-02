import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  token: string | null = null;

  user: any;

  ngOnInit(): void {
    this.token = this.tokenStorage.getToken();
    this.user = this.tokenStorage.getUser();

  }

}
