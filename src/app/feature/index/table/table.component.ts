import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  togglesideBar(){
    this.collapsed = !this.collapsed;
  }
}
