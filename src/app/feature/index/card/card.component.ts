import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  togglesideBar(){
    this.collapsed = !this.collapsed;
  }
}
