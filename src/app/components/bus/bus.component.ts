import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService, TBus } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss'],
})
export class BusComponent implements OnInit {
  buses: TBus[] = [];
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.buses = this.storageService.getBuses();
  }

  onDetailsPage(id: string) {
    console.log(id);
    this.router.navigate(['bus', id]);
  }
}
