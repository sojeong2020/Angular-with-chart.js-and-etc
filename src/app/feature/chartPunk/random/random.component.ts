import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../../../core/data.service';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})


export class RandomComponent implements OnInit {

  beerName: any;
  malt: any;
  maltName: any;
  hopsName: any;
  hops: any;
  pierandomchart:any;
  //show: boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(){
   
    this.dataService.getRandomBeers().subscribe(data => {
    
      console.log(data,"data!!!")
    this.beerName = data[0].name
      console.log(this.beerName,"this.beerName!!!")

    this.malt = data[0].ingredients.malt[0].amount.value
    console.log(this.malt,"this.malt!!!")
    this.maltName = data[0].ingredients.malt[0].name
    console.log(this.maltName,"this.maltName!!!")

    this.hops = data[0].ingredients.hops[0].amount.value
    console.log(this.hops,"this.hops!!!")
    this.hopsName = data[0].ingredients.hops[0].name
    console.log(this.hopsName,"this.hopsName!!!")

     //show line chart data
    
     
     const pierandomchart =  new Chart('PieRandomChart',{
      type:'pie',
      data: {
        labels: [this.maltName, this.hopsName ],
        datasets:[
          {
            label:this.beerName,
            data: [this.malt,this.hops],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)'

              
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {
        indexAxis: 'x', //indexAxis: 'y' it is horizontal bar chart
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          }
        }
      }


     }
     )
     

     this.pierandomchart = pierandomchart;
    

  });
   Chart.register(zoomPlugin);



  } 
    
  onClickRandomBeers(){
    console.log("clicked!!")
    this.pierandomchart.destroy();
    this.ngOnInit();

  }
  

 

}
