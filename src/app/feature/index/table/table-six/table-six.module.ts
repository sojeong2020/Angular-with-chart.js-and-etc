import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSixComponent } from './table-six.component';
import { AngularMaterialModule } from 'src/app/shared/navigation/angular-material.module';
import { DataService } from 'src/app/core/data.service';
import { BeerDataSource } from './beerDataSource';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [TableSixComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [TableSixComponent],
  providers:[DataService, BeerDataSource, MatSortModule ]
})
export class TableSixModule { }
