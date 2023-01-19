import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';

const routes: Routes = [
  {path: 'chart', component: ChartComponent},
  {path: 'bar', component: BarChartComponent},
  {path: 'line', component: LineChartComponent},
  {path: 'pie', component: PieChartComponent},
  {path: 'mixedchart', component: MixedChartComponent},

  {path: '', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
