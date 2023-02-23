import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';


const routes: Routes = [
  {path:'', component:CustomerHomeComponent, children:[
    {path:'view-customer', component:ViewCustomersComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
