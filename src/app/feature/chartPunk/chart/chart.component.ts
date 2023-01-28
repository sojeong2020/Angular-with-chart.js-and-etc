import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  collapsed: boolean = true;


  constructor() { }

  ngOnInit(): void {
    
  }

  togglesideBar(){
    this.collapsed = !this.collapsed;
  } 
 
  
}
