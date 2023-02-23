import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    ViewCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  exports: [
    CustomerHomeComponent,
    ViewCustomersComponent
  ]
})
export class CustomerModule { }
