import {Component,OnInit} from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';
//import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})
export class TableOneComponent implements OnInit {

  dataSource : Production[] =[];

  displayedColumns: string[]= ['name','first_brewed','ph','volume','tagline'];

  
constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBeerData().subscribe(data =>{
      console.log(data,"data for table!!!")
      this.dataSource = data;
    })

}

 

}
