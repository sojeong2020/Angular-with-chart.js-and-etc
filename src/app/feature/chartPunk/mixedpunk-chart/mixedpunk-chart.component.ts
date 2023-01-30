import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../../../core/data.service';
import { Production } from '../../../core/model/production';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-mixedpunk-chart',
  templateUrl: './mixedpunk-chart.component.html',
  styleUrls: ['./mixedpunk-chart.component.css']
})
export class MixedpunkChartComponent implements OnInit {

  beers: Production[]=[];
  beerName: any;
  mashTemp: any;
  mixedpunkchart: any=[];
  fermentationTemp: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBeers().subscribe(data => {
    this.beers = data
      console.log(data,"data!!!")
    this.beerName = data.map(beer=>beer.name).slice(0,6)
      console.log(this.beerName,"this.beerName!!!")

    this.mashTemp = data.map(beer => beer.method.mash_temp[0].temp.value).slice(0,6)
    console.log(this.mashTemp,"this.mashTemp!!!")

    this.fermentationTemp = data.map(beer => beer.method.fermentation.temp.value).slice(0,6)
    console.log(this.fermentationTemp,"this.fermentationTemp!!!")

     //show line chart data

     this.mixedpunkchart =  new Chart('MixedPunkChart',{
      
      data: {
        labels: this.beerName,
        datasets:[
          {
            type:'bar',
            label:'mash-Temp',
            data: this.mashTemp,
            borderWidth:0.1,
            backgroundColor:'blue',
            borderColor:'pink'
          },
          {
            type:'line',
            label:'fermentation-Temp',
            data: this.fermentationTemp,
            backgroundColor:'green',
            borderColor:'red'
          },
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
