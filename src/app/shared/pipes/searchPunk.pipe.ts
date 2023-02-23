import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';

@Pipe({
  name: 'searchPunkFilter',
  pure: false  // An impure pipe executes during every component change detection cycle called on keystroke or mouse-move
})
export class SearchPunkPipe implements PipeTransform {


  productions :Production[]=[]

  constructor( private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data from pipe function")
        //you could also cache your result
      this.productions = data;
  }
 
  )
}

transform(productions: Production[], filterName:String, filterTip:String, filterTagline:string, searchterm:string): any {

  if(productions.length == 0 ){
    return productions
  }
  else{
    return productions.filter(item =>{
      if (searchterm &&
        item.name.toLowerCase().indexOf(searchterm.toLowerCase()) === -1  &&
        item.description.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 
        ){
        return false;
    }
      if (filterName && item.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1){
          return false;
      }
      if (filterTip && item.brewers_tips.toLowerCase().indexOf(filterTip.toLowerCase()) === -1){
        return false;
    }
      if (filterTagline && item.tagline.toLowerCase().indexOf(filterTagline.toLowerCase()) === -1){
          return false;
      }
     
      return true;
    })
  }

  }

 /*  const searchedProductions = productions.filter(item =>{
    return (
      item.name.toLowerCase().includes(searchterm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchterm.toLowerCase()) 
    );
  });

   return searchedProductions */
}
