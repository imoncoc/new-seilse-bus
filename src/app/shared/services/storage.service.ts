import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { AuthService, TUser } from './auth-service.service';

export interface TBus {
  id: string;
  name: string;
  busNo: string;
  seats: TSeat[];
}

export interface TSeat {
  id: string;
  number: string;
  isBooked: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  buses: TBus[] = [
    {
      id: '1',
      name: 'Shamoli',
      busNo: 'S098',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '2',
      name: 'Green Line',
      busNo: 'GL123',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '3',
      name: 'Hanif',
      busNo: 'H456',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '4',
      name: 'Ena',
      busNo: 'E789',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '5',
      name: 'Desh Travels',
      busNo: 'DT321',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
    {
      id: '6',
      name: 'Royal Coach',
      busNo: 'RC654',
      seats: [
        { id: 'A1', number: 'A1', isBooked: false },
        { id: 'A2', number: 'A2', isBooked: false },
        { id: 'A3', number: 'A3', isBooked: false },
        { id: 'B1', number: 'B1', isBooked: false },
        { id: 'B2', number: 'B2', isBooked: false },
        { id: 'B3', number: 'B3', isBooked: false },
        { id: 'C1', number: 'C1', isBooked: false },
        { id: 'C2', number: 'C2', isBooked: false },
        { id: 'C3', number: 'C3', isBooked: false },
        { id: 'D1', number: 'D1', isBooked: false },
        { id: 'D2', number: 'D2', isBooked: false },
        { id: 'D3', number: 'D3', isBooked: false },
        { id: 'E1', number: 'E1', isBooked: false },
        { id: 'E2', number: 'E2', isBooked: false },
        { id: 'E3', number: 'E3', isBooked: false },
      ],
    },
  ];

  constructor(
    private snackbarService: SnackbarService,
    private authService: AuthService
  ) {
    this.initializeStorage();
  }

  initializeStorage() {
    const busesInStorage = localStorage.getItem('buses');
    if (!busesInStorage) {
      localStorage.setItem('buses', JSON.stringify(this.buses));
    } else {
      console.log('Buses already exist in localStorage');
    }
  }

  getBuses() {
    const busesInStorage = localStorage.getItem('buses');
    return busesInStorage ? JSON.parse(busesInStorage) : [];
  }

  updateBuses(updatedBuses: any[]) {
    localStorage.setItem('buses', JSON.stringify(updatedBuses));
  }

  getBusByName(id: string): TBus | undefined {
    return this.getBuses().find((bus: TBus) => bus.busNo === id);
  }

  bookSeat(busId: string, seatId: string, userDetails: any) {
    // Check if the user is logged in and has the "user" role
    const user = this.authService.getCredentials();
    if (!user || user.role !== 'user') {
      this.snackbarService.showMessage(
        'Please log in as a user to book a seat.',
        'OK'
      );
      return { success: false, message: 'Unauthorized access.' };
    }

    const buses = this.getBuses();
    const bus = buses.find((b: TBus) => b.id === busId);

    if (bus) {
      const seat = bus.seats.find((s: TSeat) => s.id === seatId);

      if (seat && !seat.isBooked) {
        seat.isBooked = true;
        this.updateBuses(buses);

        const bookingData = {
          busId: bus.id,
          busName: bus.name,
          seatId: seat.id,
          userDetails,
          bookingTime: new Date().toISOString(),
        };

        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        return { success: true, message: `Seat ${seatId} has been booked.` };
      }

      return {
        success: false,
        message: seat?.isBooked ? 'Seat is already booked.' : 'Seat not found.',
      };
    }

    return { success: false, message: 'Bus not found.' };
  }
}
