import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barchart: any;
  

  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart(){
  
    const barChart = new Chart("BarChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['469','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue',
            borderWidth: 1,
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen',
            borderWidth: 1
          }  
        ]
      }, 
      options: {
        indexAxis: 'x', //indexAxis: 'y' it is horizontal bar chart
        plugins: {
          zoom: {
            pan: {
              // pan options and/or events
            },
            limits: {
              // axis limits
              y: {min: 0, max: 100},
              y2: {min: -5, max: 5}
            },
            zoom: {
               // zoom options and/or events
              drag: {
                enabled: true,
                backgroundColor: 'red',

              },
             
            }
          }
        }
      }
     
      
    });
    Chart.register(zoomPlugin);


    this.barchart = barChart

  }

  ngOnDestroy(){
    this.barchart.destroy();

  }


}
