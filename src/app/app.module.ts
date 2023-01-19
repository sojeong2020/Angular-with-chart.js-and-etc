import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    ChartComponent,
    HomeComponent,
    NavComponent,
    PieChartComponent,
    MixedChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
