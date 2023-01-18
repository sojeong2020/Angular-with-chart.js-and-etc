import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: 'chart', component: ChartComponent},
  {path: 'bar', component: BarChartComponent},
  {path: 'line', component: LineChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
