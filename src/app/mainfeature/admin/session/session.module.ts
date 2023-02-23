import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionHomeComponent } from './session-home/session-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';


@NgModule({
  declarations: [
    SessionHomeComponent,
    CreateBookingComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  exports: [
    SessionHomeComponent,
    CreateBookingComponent
  ]
})
export class SessionModule { }
