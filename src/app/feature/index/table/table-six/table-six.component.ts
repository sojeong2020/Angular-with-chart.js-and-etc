import {Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';
import { BeerDataSource } from './beerDataSource';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table-six',
  templateUrl: './table-six.component.html',
  styleUrls: ['./table-six.component.css']
})
export class TableSixComponent implements OnInit {

  displayedColumns: string[]= ['first_brewed','name','ph','tagline'];

  dataSource = new BeerDataSource(this.dataService)


  constructor(private dataService: DataService) {}

  ngOnInit():void{
    this.dataSource.loadBeers({active:'ph', direction:'asc'});
    
  }

  sortBeers(sort: Sort):void{
  this.dataSource.loadBeers(sort);
  }


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log(filterValue,"filter value!")
 // this.dataSource.filter = filterValue.trim().toLowerCase();

   
  }

}

