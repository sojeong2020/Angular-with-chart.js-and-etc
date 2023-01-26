import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'

import { SessionModule } from './session/session.module';
import { CustomerModule } from './customer/customer.module';
import { NavModule } from '../shared/navigation/sidebar/nav.module';
import { TopNavModule } from '../shared/navigation/top-nav/top-nav.module';

import { CalendarComponent } from './calendar/calendar.component';
import { BarChartComponent } from './chartHome/bar-chart/bar-chart.component';
import { HomeComponent } from './chartHome/home/home.component';
import { LineChartComponent } from './chartHome/line-chart/line-chart.component';
import { PieChartComponent } from './chartHome/pie-chart/pie-chart.component';
import { MixedChartComponent } from './chartHome/mixed-chart/mixed-chart.component';

import { ChartComponent } from './chartPunk/chart/chart.component';
import { BarpunkChartComponent } from './chartPunk/barpunk-chart/barpunk-chart.component';
import { LinepunkChartComponent } from './chartPunk/linepunk-chart/linepunk-chart.component';
import { MixedpunkChartComponent } from './chartPunk/mixedpunk-chart/mixedpunk-chart.component';
import { PiepunkChartComponent } from './chartPunk/piepunk-chart/piepunk-chart.component';
import { RandomComponent } from './chartPunk/random/random.component';

@NgModule({
  declarations: [
    CalendarComponent,
    BarChartComponent,
    HomeComponent,
    LineChartComponent,
    ChartComponent,
    PieChartComponent,
    MixedChartComponent,
    BarpunkChartComponent,
    LinepunkChartComponent,
    MixedpunkChartComponent,
    PiepunkChartComponent,
    RandomComponent, 
    

  ],
  imports: [
    CommonModule,
    NavModule,
    TopNavModule,
    MatIconModule,
    SessionModule,
    CustomerModule
  ],
  exports:[
    CalendarComponent,
    BarChartComponent,
    HomeComponent,
    LineChartComponent,
    ChartComponent,
    PieChartComponent,
    MixedChartComponent,
    BarpunkChartComponent,
    LinepunkChartComponent,
    MixedpunkChartComponent,
    PiepunkChartComponent,
    RandomComponent, 
  ]
})
export class FeatureModule { }
