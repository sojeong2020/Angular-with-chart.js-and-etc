import {Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})


export class TableOneComponent implements OnInit {

  displayedColumns: string[]= ['first_brewed','name','ph','tagline'];


  dataSource : Production[] =[];

 

 constructor(private dataService: DataService) {}

   ngOnInit(): void {
    this.dataService.getBeerData().subscribe(data =>{
      this.dataSource = data;
    })
  }  

  

 
  
}
