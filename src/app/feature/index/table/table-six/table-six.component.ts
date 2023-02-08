import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-six',
  templateUrl: './table-six.component.html',
  styleUrls: ['./table-six.component.css']
})
export class TableSixComponent implements OnInit {

  searchText!: string;
  filters!: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
