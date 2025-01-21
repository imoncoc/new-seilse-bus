import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TBus } from '../bookings.interface';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss'],
})
export class BusDetailsComponent implements OnInit {
  // selectedBus: TBus;
  busDetails: any;

  constructor(private route: ActivatedRoute, private busStorage: Storage) {}


  ngOnInit(): void {

  }
}
