import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { MatButtonModule } from '@angular/material/button';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [BookingsComponent, BusDetailsComponent, DetailsComponent],
  imports: [CommonModule, BookingsRoutingModule, MatButtonModule],
})
export class BookingsModule {}
