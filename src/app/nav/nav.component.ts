import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sessionCollapsed: boolean = false;
  customerCollapsed: boolean = false;
  providerCollapsed: boolean = false;
  coachCollapsed: boolean = false;
  activityCollapsed: boolean = false;
  venueCollapsed: boolean = false;
  managementCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSessionMenu(){
    this.sessionCollapsed = !this.sessionCollapsed;
  }
  toggleCustomerMenu(){
    this.customerCollapsed = !this.customerCollapsed;
  }
  toggleProviderMenu(){
    this.providerCollapsed = !this.providerCollapsed;
  }
  toggleCoachMenu(){
    this.coachCollapsed = !this.coachCollapsed;
  }
  toggleActivityMenu(){
    this.activityCollapsed = !this.activityCollapsed;
  }
  toggleVenueMenu(){
    this.venueCollapsed = !this.venueCollapsed;
  }
  toggleManagementMenu(){
    this.managementCollapsed = !this.managementCollapsed;
  }
  
 

}
