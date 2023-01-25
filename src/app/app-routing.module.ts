import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './feature/chartHome/home/home.component';
import { ChartComponent } from './feature/chartPunk/chart/chart.component';
import { CalendarComponent } from './feature/calendar/calendar.component';

const routes: Routes = [

  {path: 'chart', component: ChartComponent},
  {path: 'calendar', component: CalendarComponent},
  
  {path: 'session', loadChildren:()=> 
   import('./feature/session/session.module')
   .then((m)=> m.SessionModule)},
  {path: 'customer', loadChildren:()=> 
   import('./feature/customer/customer.module')
   .then((m)=> m.CustomerModule)},

   {path: '', component: HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
