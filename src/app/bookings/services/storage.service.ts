import { Injectable } from '@angular/core';
import { TBus } from '../bookings.interface';

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

  constructor() {
    this.initializeStorage();
  }

  initializeStorage() {
    const busesInStorage = localStorage.getItem('buses');
    if (!busesInStorage) {
      // If no buses data in localStorage, add the predefined buses
      localStorage.setItem('buses', JSON.stringify(this.buses));
      console.log('Buses added to localStorage');
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

  getBusByName(busName: string): TBus | undefined {
    return this.getBuses().find((bus: TBus) => bus.name === busName);
  }
}
