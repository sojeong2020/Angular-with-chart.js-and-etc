import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderHomeComponent } from './provider-home/provider-home.component';


const routes: Routes = [
  {
    path: '', component: ProviderHomeComponent,
    children: [
      {path: 'provider-session', loadChildren:()=> 
      import('./provider-session/provider-session.module')
      .then((m)=> m.ProviderSessionModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
