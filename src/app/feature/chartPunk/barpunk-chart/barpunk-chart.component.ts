import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../../../core/data.service';
import { Production } from '../../../core/model/production';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-barpunk-chart',
  templateUrl: './barpunk-chart.component.html',
  styleUrls: ['./barpunk-chart.component.css']
})
export class BarpunkChartComponent implements OnInit {
  
  beers: Production[]=[];
  beerName: any;
  beerPh: any;
  barpunkchart: any=[];

constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBeers().subscribe(data => {
    this.beers = data
      console.log(data,"data!!!")
    this.beerName = data.map(beer=>beer.name).slice(0,6)
      console.log(this.beerName,"this.beerName!!!")
    this.beerPh = data.map(beer => beer.ph).slice(0,6)
    console.log(this.beerPh,"this.beerPh!!!")

    //show bar chart data

    this.barpunkchart =  new Chart('BarPunkChart',{
      type:'bar',
      data: {
        labels: this.beerName,
        datasets:[
          {
            label:'PH',
            data: this.beerPh,
            borderWidth:1,
            backgroundColor:'green',
            borderColor:'pink'
          }
        ]
      },
      options: {
        indexAxis: 'x', //indexAxis: 'y' it is horizontal bar chart
        plugins: {
          zoom: {
            pan:{
              enabled: true,
              mode:'x',
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'x',
            }
          }
        }
      }


     }
     )
     
  });
    Chart.register(zoomPlugin);
  } 
    
}
