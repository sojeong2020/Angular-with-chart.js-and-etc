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
  }
 
  )
}

transform(productions: Production[], filterName:string, filterTip: string, filterTagline:string ): any {

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
        
        return true;
   })
}
else{
    return productions;
}
}
 
  //switch(filter) { case 'status': ... break; case 'category': break; }
  



 // return values.filter(value => {
    
  //return values.filter((value: any) =>{

    // const nameFound =value.name.toLowerCase().indexOf(filter) !==-1;

    //let matches = Object.keys(filter).every(f => {
     // return filter[f] === 'All' || value[f] == filter[f];
    
   // })

    //return matches;
 // })


//}

}
