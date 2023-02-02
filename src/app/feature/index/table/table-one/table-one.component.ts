import {Component, OnInit , ViewChild} from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})


export class TableOneComponent implements OnInit {

  displayedColumns: string[]= ['first_brewed','name','ph','tagline'];

  dataSource!: MatTableDataSource<Production>

  posts!: Production[];

  @ViewChild(MatSort) sort!: MatSort;


 

 constructor(private dataService: DataService) {}

   ngOnInit(): void {
    this.dataService.getBeerData().subscribe(data =>{
      console.log(data,"data from table-one")
      this.posts = data;

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.sort = this.sort;
    })
  }  

  

 
  
}
