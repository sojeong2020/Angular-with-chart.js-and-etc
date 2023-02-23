import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSessionRoutingModule } from './provider-session-routing.module';
import { SessionHomeComponent } from './session-home/session-home.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';


@NgModule({
  declarations: [
    SessionHomeComponent,
    ViewProviderComponent
  ],
  imports: [
    CommonModule,
    ProviderSessionRoutingModule
  ]
})
export class ProviderSessionModule { }
