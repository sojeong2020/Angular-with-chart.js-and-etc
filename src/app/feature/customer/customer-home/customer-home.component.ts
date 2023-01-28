import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  togglesideBar(){
    this.collapsed = !this.collapsed;
  }

}
