import { Component, OnInit } from '@angular/core';
import { Production } from 'src/app/core/model/production';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-table-eight',
  templateUrl: './table-eight.component.html',
  styleUrls: ['./table-eight.component.css']
})
export class TableEightComponent implements OnInit {

  filterName!: string;
  filterTip!: string;
  filterTagline!: string;  
 
  productions: Production[]=[]

 constructor(private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data from table-three")
      this.productions = data;
  })
}


dowork(event:any){
  console.log(event.value.filterName," filterName event from table form")
  console.log(event.value.filterTip," filterTip event from table form")
  console.log(event.value.filterTagline," filterTagline event from table form ")
  
this.filterName = event.value.filterName;
this.filterTip = event.value.filterTip;
this.filterTagline = event.value.filterTagline;
}


}
