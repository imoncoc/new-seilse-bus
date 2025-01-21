import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  users: any[] = [];
  private localStorageKey = 'loginCredential';

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }

  onSubmit(): void {
    //   if (this.loginForm.valid) {
    //     console.log('Form Value:', this.loginForm.value);
    //   } else {
    //     console.log('Form is invalid');
    //   }
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      const matchingUser = this.users.find(
        (user) =>
          (user.email === loginData.email &&
            user.password === loginData.password) ||
          (user.username === loginData.email &&
            user.password === loginData.password)
      );

      if (matchingUser) {
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        // this.authService.login(matchingUser, this.returnUrl);
        console.log('login: ', matchingUser);
        this.authService.login(matchingUser);

        if (matchingUser.role === 'admin') {
          this.router.navigate(['/']);
          this.snackbarService.showMessage('Successfully login', 'Success');
        } else {
          this.router.navigate(['/']);
          this.snackbarService.showMessage('Successfully login', 'Success');
        }
      } else {
        // this.toastService.show('Invalid email/username or password!', 'error');
        this.snackbarService.showMessage(
          'Invalid email/username or password!',
          'Error'
        );
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  logout() {
    this.authService.logout();
  }
}
