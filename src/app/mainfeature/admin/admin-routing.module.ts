import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';



const routes: Routes = [
   {
    path: '', component: AdminHomeComponent,
    children: [
      {path: 'session', loadChildren:()=> 
      import('./session/session.module')
      .then((m)=> m.SessionModule)},

      {path: 'customer', loadChildren:()=> 
      import('./customer/customer.module')
      .then((m)=> m.CustomerModule)},

    ] 
     
  }, 

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
