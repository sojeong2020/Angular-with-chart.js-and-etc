import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form!: FormGroup;
  levels = [
    "Beginner",
    "Expert",
  ];

@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
searchText: string = '';

constructor(private fb: FormBuilder,
private userService: UserService) {}

  ngOnInit(): void {
  }

  buildForm(): void {
    this.form = this.fb.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    level: new FormControl(''),
    agefrom: new FormControl(''),
    ageto: new FormControl('')
    });
    }
    
     search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
    }

}
