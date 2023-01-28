import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  color: string;
  
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carbo', weight: 5.0026, symbol: 'C', color:'pink'},
  {position: 2, name: 'HeliumHeliumHeliumHeliumHeliumBerylliumBeryllium', weight: 4.0026, symbol: 'He', color:'pink'},
  {position: 3, name: 'LithiumLithiumLithiumCarbon', weight: 6.941, symbol: 'Li',  color:'pink'},
  {position: 4, name: 'Beryllium', weight: 9.01226789065445623345612345, symbol: 'Be',  color:'pink'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'BBBBBBBBBBBBBBBBAAAAAAC', color:'pink'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', color:'pink'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', color:'pink'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', color:'pink'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', color:'pink'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', color:'pink'},
  {position: 12, name: 'HeliumHeliumHeliumHeliumHeliumBerylliumBeryllium', weight: 4.0026, symbol: 'He', color:'pink'},
  {position: 13, name: 'LithiumLithiumLithiumCarbon', weight: 6.941, symbol: 'Li', color:'pink'},
  {position: 14, name: 'Beryllium', weight: 9.01226789065445623345612345, symbol: 'Be', color:'pink'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'BBBBBBBBBBBBBBBBAAAAAAC', color:'pink'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C', color:'pink'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N', color:'pink'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O', color:'pink'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F', color:'pink'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne', color:'pink'},
];

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
export class TableTwoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'color'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
