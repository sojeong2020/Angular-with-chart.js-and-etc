import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/navigation/angular-material.module';

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
import { TableComponent } from './index/table/table.component';
import { CardComponent } from './index/card/card.component';
import { TableOneComponent } from './index/table/table-one/table-one.component';
import { TableTwoComponent } from './index/table/table-two/table-two.component';
import { TableThreeComponent } from './index/table/table-three/table-three.component';
import { TableFourComponent } from './index/table/table-four/table-four.component';
import { CardOneComponent } from './index/card/card-one/card-one.component';
import { CardTwoComponent } from './index/card/card-two/card-two.component';
import { TableFiveComponent } from './index/table/table-five/table-five.component';
import { TableSevenComponent } from './index/table/table-seven/table-seven.component';
import { TableEightComponent } from './index/table/table-eight/table-eight.component';
import { TableSearchFormComponent } from './forms/table-search-form/table-search-form.component';

import { PunkPipe } from '../shared/pipes/punk.pipe';
import { SearchPunkPipe } from '../shared/pipes/searchPunk.pipe';
import { SortableHeaderDirective } from '../shared/directives/sortable-header.directive';

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
    TableComponent,
    CardComponent,
    TableOneComponent,
    TableTwoComponent,
    TableThreeComponent,
    TableFourComponent,
    CardOneComponent,
    CardTwoComponent,
    TableFiveComponent,
    TableSevenComponent,
    TableEightComponent,

    PunkPipe,
    SearchPunkPipe,
    SortableHeaderDirective,

    TableSearchFormComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    TopNavModule,
    AngularMaterialModule,
    SessionModule,
    CustomerModule,
    RouterModule,
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
    TableComponent,
    CardComponent,
    TableOneComponent,
    TableSevenComponent,
    TableSearchFormComponent
  ]
})
export class FeatureModule { }
