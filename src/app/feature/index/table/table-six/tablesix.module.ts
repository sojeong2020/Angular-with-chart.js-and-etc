import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/navigation/angular-material.module';

import { UserService } from 'src/app/core/user.service';

import { TableSixComponent } from './table-six.component';
import { SearchComponent } from './search/search.component';
//import { UserListComponent } from './user-list/user-list.component';
//import { FilterPipe } from '../../pipe/filter.pipe';


@NgModule({
    declarations: [
        TableSixComponent,
        SearchComponent,
        //UserListComponent,
    
    ],
   imports: [ 
    CommonModule, 
    AngularMaterialModule,
   ],
   exports:[
    TableSixComponent,
    SearchComponent,
    //00258*UserListComponent,

   ],
  
  providers: [ UserService]
})
export class TableSixModule { }