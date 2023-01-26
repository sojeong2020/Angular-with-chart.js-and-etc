import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { OutstandingInvoicingComponent } from './outstanding-invoicing/outstanding-invoicing.component';
import { ProformaInvoicingComponent } from './proforma-invoicing/proforma-invoicing.component';
import { SummaryComponent } from './summary/summary.component';
import { ViewEditComponent } from './view-edit/view-edit.component';

const routes: Routes = [
  {path:'', component: CustomerHomeComponent, children:[
    {path:'viewEdit', component:ViewEditComponent},
    {path:'addCustomer', component:AddCustomerComponent},
    {path:'summary', component:SummaryComponent},
    {path:'invoicing', component: InvoicingComponent},
    {path:'proformaInvoices', component:ProformaInvoicingComponent},
    {path:'outstandingInvoices', component:OutstandingInvoicingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
