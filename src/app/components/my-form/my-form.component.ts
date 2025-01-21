import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TBus } from 'src/app/bookings/bookings.interface';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  bus: any;
  bookingForm!: FormGroup;
  buses!: any[];
  destinations: string[] = [
    'Mirpur 11',
    'Mirpur 10',
    'Mirpur 6',
    'Mirpur 4',
    'Motijhil',
    'Bonosri',
    'Hatirjheel',
  ];
  times: string[] = ['08:00 AM', '09:00 AM', '05:00 PM', '06:00 PM'];

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MyFormComponent>,
    private snackBar: SnackbarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   const busId = params.get('id');
    //   if (busId) {
    //     this.bus = this.storageService
    //       .getBuses()
    //       .find((bus: TBus) => bus.id === busId);
    //   }
    // });

    this.bookingForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      // busNo: new FormControl('', [Validators.required]),
      busName: new FormControl(this.data.bus.name),
      seatNo: new FormControl(this.data.seat.id),
      destination: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      const userDetails = {
        name: formData.name,
        destination: formData.destination,
        time: formData.time,
      };

      const result = this.storageService.bookSeat(
        this.data.bus.id,
        this.data.seat.id,
        userDetails
      );

      if (result.success) {
        this.dialogRef.close();
        this.snackBar.showMessage('Booking successful!');
      } else {
        this.snackBar.showMessage(result.message);
      }
    }
  }
}
