import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}
