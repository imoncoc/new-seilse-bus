import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StorageService, TBus } from 'src/app/shared/services/storage.service';
import { MyFormComponent } from '../my-form/my-form.component';
import {
  AuthService,
  TUser,
} from 'src/app/shared/services/auth-service.service';
import { Subscription } from 'rxjs';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-my-bus-details',
  templateUrl: './my-bus-details.component.html',
  styleUrls: ['./my-bus-details.component.scss'],
})
export class MyBusDetailsComponent implements OnInit {
  userData: TUser | null | undefined;
  isUserLoggedIn: boolean = false;
  private authSubscription: Subscription | null = null;

  bus: TBus | any;
  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService
      .getCredentialsObservable()
      .subscribe((userData) => {
        this.userData = userData;
        this.isUserLoggedIn = !!userData;
        // console.log('Received userData:', userData);
        // console.log('isUserLoggedIn:', this.isUserLoggedIn);
      });

    this.route.paramMap.subscribe((params) => {
      const busId = params.get('id');
      if (busId) {
        this.bus = this.storageService
          .getBuses()
          .find((bus: TBus) => bus.busNo === busId);
      }
    });
  }

  openDialog(bus: any, seat: any) {
    if (this.userData?.role === 'admin') {
      this.dialog.open(AdminModalComponent, {
        data: { bus, seat },
        width: '400px',
      });
    } else {
      this.dialog.open(MyFormComponent, {
        data: { bus, seat },
        width: '400px',
      });
    }
  }
}
