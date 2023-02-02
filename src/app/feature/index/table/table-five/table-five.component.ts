import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-five',
  templateUrl: './table-five.component.html',
  styleUrls: ['./table-five.component.css']
})

export class TableFiveComponent implements OnInit {
  //dataSource : Production[] =[];

  displayedColumns: string[]= ['name','first_brewed','ph','volume','tagline'];

  dataSource!: MatTableDataSource<Production>

  posts!: Production[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data for table-five!!!")
      this.posts = data;

       // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);

      this.dataSource.paginator = this.paginator;
  })

  }  
  
}




