import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionHomeComponent } from './session-home/session-home.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';

const routes: Routes = [
  {path:'', component: SessionHomeComponent,
   children:[
    {path:'view-provider', component: ViewProviderComponent},
    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSessionRoutingModule { }
