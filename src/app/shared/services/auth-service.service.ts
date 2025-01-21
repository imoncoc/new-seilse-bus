import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SnackbarService } from './snackbar.service';

export type TUser = {
  email: string;
  fullname: string;
  id: number;
  password: string;
  username: string;
  role: string
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageKey = 'loginCredential';
  private credentialsSubject!: BehaviorSubject<TUser | null>;

  constructor(private snackbarService: SnackbarService) {
    const initialCredentials = this.getCredentialsFromStorage();
    this.credentialsSubject = new BehaviorSubject<TUser | null>(
      initialCredentials
    );
  }

  private getCredentialsFromStorage(): TUser | null {
    const credentials = localStorage.getItem(this.localStorageKey);
    return credentials ? JSON.parse(credentials) : null;
  }

  login(credentials: TUser): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(credentials));
    this.credentialsSubject.next(credentials);
    // this.snackbarService.showMessage('Login Success', 'OK');
  }

  getCredentials(): TUser | null {
    return this.credentialsSubject.value;
  }

  getCredentialsObservable(): Observable<TUser | null> {
    return this.credentialsSubject.asObservable(); // Expose as observable
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.credentialsSubject.next(null);
    this.snackbarService.showMessage('Successfully logout', 'Success');
  }
}
