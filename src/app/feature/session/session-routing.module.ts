import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionHomeComponent } from './session-home/session-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CoachScheduleComponent } from './coach-schedule/coach-schedule.component';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CheckOffSessionsComponent } from './check-off-sessions/check-off-sessions.component';
import { SearchSessionComponent } from './search-session/search-session.component';
import { EndingBookingsComponent } from './ending-bookings/ending-bookings.component';

const routes: Routes = [
  {path:'', component:SessionHomeComponent, children:[
    {path:'CreateBooking', component:CreateBookingComponent},
    {path:'CoachSchedule', component:CoachScheduleComponent},
    {path:'BookingCalendar', component:BookingCalendarComponent},
    {path:'CheckOffSessions', component:CheckOffSessionsComponent},
    {path:'SearchSession', component:SearchSessionComponent},
    {path:'EndingBookings', component:EndingBookingsComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
