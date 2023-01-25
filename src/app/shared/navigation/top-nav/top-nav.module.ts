import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    TopNavComponent
  ]
})
export class TopNavModule { }
