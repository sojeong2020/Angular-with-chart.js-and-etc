import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';

@Component({
  selector: 'app-table-seven',
  templateUrl: './table-seven.component.html',
  styleUrls: ['./table-seven.component.css']
})
export class TableSevenComponent  {

  displayedColumns: string[]= ['first_brewed','name','ph','tagline'];

  dataSource!: MatTableDataSource<Production>

  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService) {
    this.dataService.getBeers().subscribe((data)=>{
      console.log(data,"data from table-seven !!")
      this.posts = data;

       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


