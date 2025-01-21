import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss'],
})
export class AdminModalComponent implements OnInit {
  bookingDetails: any = null; // Holds booking details if found
  isDataEmpty: boolean = false; // Tracks whether data is found

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AdminModalComponent>
  ) {}

  ngOnInit(): void {
    this.loadBookingData();
  }

  loadBookingData(): void {
    // Retrieve data from localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    // Find booking details for the current bus and seat
    const match = bookings.find(
      (booking: any) =>
        booking.busId === this.data.bus.id &&
        booking.seatId === this.data.seat.number
    );

    if (match) {
      this.bookingDetails = match;
    } else {
      this.isDataEmpty = true;
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
