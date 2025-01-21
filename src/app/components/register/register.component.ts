import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

function matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
      !!control.parent.value &&
      control.value === (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  hideConfirm = true;
  users: any[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          matchValidator('confirmPassword', true),
        ],
      ],
      role: ['', [Validators.required]],
      confirmPassword: [Validators.required, matchValidator('password')],
    });
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        matchValidator('confirmPassword', true),
      ]),
      role: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        matchValidator('password'),
      ]),
    });

    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage);
    }
  }

  passwordsMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      let newUserData = this.registerForm.value;

      const existingUser = this.users.find(
        (user) => user.email === newUserData.email
      );

      if (existingUser) {
        if (existingUser.email === newUserData.email) {
          this.snackbarService.showMessage(
            'User Email already exists',
            'Error'
          );
        } else {
          this.snackbarService.showMessage('Username already exists!', 'Error');
        }
      } else {
        newUserData = {
          ...this.registerForm.value,
          id: new Date().getTime(),
        };

        delete newUserData.confirmPassword;

        this.users.push(newUserData);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.snackbarService.showMessage('Signup successful!', 'Success');
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }
    } else {
      this.snackbarService.showMessage('Signup successful!', 'Success');
      this.registerForm.markAllAsTouched();
    }
  }

  getPasswordError() {
    const passwordControl = this.registerForm.get('password');

    if (passwordControl?.errors) {
      if (passwordControl.errors['required']) {
        return 'Password is required.';
      } else if (passwordControl.errors['pattern']) {
        return 'Password must contain at least one letter, one number, and may include -, _, ?, or /.';
      } else if (passwordControl.errors['minlength']) {
        return `Password must be at least ${passwordControl.errors['minlength'].requiredLength} characters long.`;
      } else if (passwordControl.errors['maxlength']) {
        return `Password must be no more than ${passwordControl.errors['maxlength'].requiredLength} characters long.`;
      }
    }

    return '';
  }
}
