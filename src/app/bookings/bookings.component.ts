import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { TBus } from './bookings.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {
  // buses = [
  //   { id: '1', name: 'Shamoli', busNo: 'S098', seats: 15 },
  //   { id: '2', name: 'Green Line', busNo: 'GL123', seats: 30 },
  //   { id: '3', name: 'Hanif', busNo: 'H456', seats: 20 },
  //   { id: '4', name: 'Ena', busNo: 'E789', seats: 25 },
  //   { id: '5', name: 'Desh Travels', busNo: 'DT321', seats: 18 },
  //   { id: '6', name: 'Royal Coach', busNo: 'RC654', seats: 22 },
  // ];

  buses: TBus[] = [];

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.buses = this.storageService.getBuses();
  }

  bookSeat(busId: string, seatId: string) {
    const bus = this.buses.find((b) => b.id === busId);
    const seat = bus?.seats.find((s) => s.id === seatId);
    if (seat && !seat.isBooked) {
      seat.isBooked = true;
      this.storageService.updateBuses(this.buses);
      alert(`Seat ${seatId} in bus ${bus?.name} booked successfully!`);
    } else {
      alert('Seat already booked or not found!');
    }
  }

  navigateToBusDetails(bus: any): void {
    // Navigate to the bus details page using the bus name as a route parameter
    const formattedBusName = bus.name;
    this.router.navigate([`/${bus.name}`]);
  }

  onDetailsPage(id: string) {
    console.log(id);
    this.router.navigate(['bus', id]);
  }
}
