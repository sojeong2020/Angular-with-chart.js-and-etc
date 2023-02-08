import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Production } from 'src/app/core/model/production';

@Pipe({
  name: 'punkFilter',
  pure: false  // An impure pipe executes during every component change detection cycle called on keystroke or mouse-move
})
export class PunkPipe implements PipeTransform {

  productions :Production[]=[]

  constructor( private dataService: DataService){}

ngOnInit(): void {
    this.dataService.getBeers().subscribe(data =>{
      console.log(data,"data from pipe function")
        //you could also cache your result
      this.productions = data;
  })
}

transform(productions: Production[], filterName:String, filterTip:String, filterTagline:string): any {

  if (productions && productions.length){
    return productions.filter(item =>{
        if (filterName && item.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1){
            return false;
        }
        if (filterTip && item.brewers_tips.toLowerCase().indexOf(filterTip.toLowerCase()) === -1){
          return false;
      }
        if (filterTagline && item.tagline.toLowerCase().indexOf(filterTagline.toLowerCase()) === -1){
            return false;
        }
       /*  if (filterPh && item.ph.toString().toLowerCase().indexOf(filterPh.toString().toLowerCase()) === -1){
          return false;
      } */
        return true;
   })
}
else{
    return productions;
}
}
 
  

}
