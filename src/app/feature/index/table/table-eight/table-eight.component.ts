import { Component, OnInit , QueryList, ViewChildren} from '@angular/core';
import { Production } from 'src/app/core/model/production';
import { DataService } from 'src/app/core/data.service';
import { SortableHeaderDirective, SortEvent, compare } from 'src/app/shared/directives/sortable-header.directive';

@Component({
  selector: 'app-table-eight',
  templateUrl: './table-eight.component.html',
  styleUrls: ['./table-eight.component.css']
})
export class TableEightComponent implements OnInit {

  filterName!: string;
  filterTip!: string;
  filterTagline!: string;
  
  
  data: Production[]=[];
  productions: Production[]=[];

  @ViewChildren(SortableHeaderDirective)

  headers!: QueryList<SortableHeaderDirective>;

 constructor(private dataService: DataService) { }

ngOnInit(): void {
    this.dataService.getBeers().subscribe(result =>{
      console.log(result,"result from table-three")
      this.productions = result;
      this.data = result;
  })
}


filterSearchValues(event:any){
  console.log(event.value.filterName," filterName from table form data event")
  console.log(event.value.filterTip," filterTip from table form data event")
  console.log(event.value.filterTagline," filterTagline from table form data event")

this.filterName = event.value.filterName;
this.filterTip = event.value.filterTip;
this.filterTagline = event.value.filterTagline;
}

onSort({ column, direction }: SortEvent) {
  console.log(this.data, "data!!")
  console.log(this.productions, "productions!!")

  // resetting other headers
  this.headers.forEach((header) => {
    if (header.sortable !== column) {
      header.direction = '';
    }
  });

  // sorting productions
  if (direction === '' || column === '') {
    this.productions = this.data;
  } else {
    this.productions = [...this.data].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  } 

} 


}
