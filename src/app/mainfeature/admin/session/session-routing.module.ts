import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionHomeComponent } from './session-home/session-home.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

const routes: Routes = [
  {path:'', component:SessionHomeComponent, children:[
    {path:'create-booking', component:CreateBookingComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
