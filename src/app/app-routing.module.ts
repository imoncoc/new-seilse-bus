import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BusComponent } from './components/bus/bus.component';
import { MyBusDetailsComponent } from './components/my-bus-details/my-bus-details.component';

const routes: Routes = [
  // {path: "", component: HomeComponent},
  {
    path: '',
    component: BusComponent,
  },
  {
    path: 'bus/:id',
    component: MyBusDetailsComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
