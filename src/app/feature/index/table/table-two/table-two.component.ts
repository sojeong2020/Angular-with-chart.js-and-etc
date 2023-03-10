import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,  } from '@angular/material/table';
import { Production, ProductionFilter, filterOption } from 'src/app/core/model/production';
import { DataService } from 'src/app/core/data.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
export class TableTwoComponent implements OnInit {

  displayedColumns: string[]= ['name','first_brewed','ph','tagline'];

  phs: number[]=[3.2, 4.4, 5.2];
  names: string[]=['Buzz','Storm','Movember'];
  //tags: string[]=['Dry','Milk','You'];

  productionFilters: ProductionFilter[]=[];

  defaultValue = "All";

  

  filterDictionary= new Map<string,string>();

  dataSourceFilters! : MatTableDataSource<Production>;
  posts!: Production[];

constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data from table-seven!")
      this.posts = data;

    console.log(this.defaultValue,"this.defaultvalue!!") //'All'


    this.dataSourceFilters = new MatTableDataSource(this.posts);

    this.productionFilters.push({name:'ph', options:this.phs, defaultValue: this.defaultValue});
    this.productionFilters.push({name:'name', options:this.names, defaultValue:this.defaultValue});
    //this.productionFilters.push({name:'tag',options:this.tags, defaultValue:this.defaultValue});

    this.dataSourceFilters.filterPredicate = function (record,filter) {

      var map = new Map(JSON.parse(filter));
      let isMatch = false;

      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Production] == value); 
        if(!isMatch) return false;
      }

      return isMatch;
    }

     

    })  
  }

applyProductionFilter(ob : MatSelectChange, productionFilter : ProductionFilter) {

  console.log(productionFilter,"production filter!")

    this.filterDictionary.set(productionFilter.name, ob.value);

    let jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    
    this.dataSourceFilters.filter = jsonString;

    console.log(jsonString,"jsonString!!!")
    //console.log(this.filterValues);
  }



}
