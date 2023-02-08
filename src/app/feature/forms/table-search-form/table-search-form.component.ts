import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-search-form',
  templateUrl: './table-search-form.component.html',
  styleUrls: ['./table-search-form.component.css']
})


export class TableSearchFormComponent implements OnInit {

  @Output() searchValues = new EventEmitter();

  searchForm = new FormGroup({
    filterName:new FormControl(),
    filterTip:new FormControl(),
    filterTagline: new FormControl(),
  });

constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {
    console.warn('Your search term has been submitted this.searchForm.value', this.searchForm.value);
  
    this.searchValues.emit(this.searchForm)
    
    this.searchForm.reset();
  } 

 
}
