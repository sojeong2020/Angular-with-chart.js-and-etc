import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-home',
  templateUrl: './session-home.component.html',
  styleUrls: ['./session-home.component.css']
})
export class SessionHomeComponent implements OnInit {

  collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglesideBar(){
    this.collapsed = !this.collapsed;
  }

}
