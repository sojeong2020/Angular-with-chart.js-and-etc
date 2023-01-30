import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../../../core/data.service';
import { Production } from '../../../core/model/production';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-linepunk-chart',
  templateUrl: './linepunk-chart.component.html',
  styleUrls: ['./linepunk-chart.component.css']
})
export class LinepunkChartComponent implements OnInit {

  beers: Production[]=[];
  beerName: any;
  beerPh: any;
  linepunkchart: any=[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBeers().subscribe(data => {
    this.beers = data
      console.log(data,"data!!!")
    this.beerName = data.map(beer=>beer.name).slice(0,6)
      console.log(this.beerName,"this.beerName!!!")
    this.beerPh = data.map(beer => beer.ph).slice(0,6)
    console.log(this.beerPh,"this.beerPh!!!")

     //show line chart data

     this.linepunkchart =  new Chart('LinePunkChart',{
      type:'line',
      data: {
        labels: this.beerName,
        datasets:[
          {
            label:'Beer PH',
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
            },
            
          }
        }
      }


     }
     )
    

  });
    Chart.register(zoomPlugin);

  } 
    

  


}
