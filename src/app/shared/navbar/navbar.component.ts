import { Component, OnInit } from '@angular/core';
import { AuthService, TUser } from '../services/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userData: TUser | null | undefined;
  isUserLoggedIn: boolean = false;
  private authSubscription: Subscription | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService
      .getCredentialsObservable()
      .subscribe((userData) => {
        this.userData = userData;
        this.isUserLoggedIn = !!userData;
        console.log('Received userData:', userData);
        console.log('isUserLoggedIn:', this.isUserLoggedIn);
      });
  }

  logout() {
    console.log('User logged out');
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }

}
