import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from 'src/app/shared/navigation/sidebar/nav.module';
import { TopNavModule } from 'src/app/shared/navigation/top-nav/top-nav.module';
import { AngularMaterialModule } from 'src/app/shared/navigation/angular-material.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { OutstandingInvoicingComponent } from './outstanding-invoicing/outstanding-invoicing.component';
import { ProformaInvoicingComponent } from './proforma-invoicing/proforma-invoicing.component';
import { SummaryComponent } from './summary/summary.component';
import { ViewEditComponent } from './view-edit/view-edit.component';

@NgModule({
  declarations: [
    CustomerHomeComponent,
    AddCustomerComponent,
    InvoicingComponent,
    OutstandingInvoicingComponent,
    ProformaInvoicingComponent,
    SummaryComponent,
    ViewEditComponent

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NavModule,
    TopNavModule,
    AngularMaterialModule
    ],
  exports:[
    CustomerHomeComponent,
    AddCustomerComponent,
    InvoicingComponent,
    OutstandingInvoicingComponent,
    ProformaInvoicingComponent,
    SummaryComponent,
    ViewEditComponent

  ]
})
export class CustomerModule { }
