import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';

@Component({
  selector: 'app-table-five',
  templateUrl: './table-five.component.html',
  styleUrls: ['./table-five.component.css']
})

export class TableFiveComponent implements OnInit {
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




