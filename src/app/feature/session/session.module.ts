import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';

import { MatIconModule } from '@angular/material/icon'
import { NavModule } from 'src/app/shared/navigation/sidebar/nav.module';
import { TopNavModule } from 'src/app/shared/navigation/top-nav/top-nav.module';

import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CoachScheduleComponent } from './coach-schedule/coach-schedule.component';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CheckOffSessionsComponent } from './check-off-sessions/check-off-sessions.component';
import { EndingBookingsComponent } from './ending-bookings/ending-bookings.component';
import { SessionHomeComponent } from './session-home/session-home.component';
import { SearchSessionComponent } from './search-session/search-session.component';

@NgModule({
  declarations: [
    CreateBookingComponent,
    CoachScheduleComponent,
    BookingCalendarComponent,
    CheckOffSessionsComponent,
    EndingBookingsComponent,
    SessionHomeComponent,
    SearchSessionComponent,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MatIconModule,
    NavModule,
    TopNavModule

  ],  
  exports:[
    CreateBookingComponent,
    CoachScheduleComponent,
    BookingCalendarComponent,
    CheckOffSessionsComponent,
    EndingBookingsComponent,
    SessionHomeComponent,
    SearchSessionComponent,

  ]
})
export class SessionModule { }
