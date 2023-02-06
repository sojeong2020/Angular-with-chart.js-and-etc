import { Component, OnInit } from '@angular/core';
import { Production } from 'src/app/core/model/production';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.css']
})
export class TableThreeComponent implements OnInit {

  filterName!: string;
  filterTip!: string;
  filterTagline!: string;

 productions: Production[]=[]

  constructor(private dataService: DataService) { }

ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data from table-three")
      this.productions = data;
  })
}


}
