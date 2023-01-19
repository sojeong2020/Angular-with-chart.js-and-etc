import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent implements OnInit {
  public mixedchart: any;

  constructor() { }

  ngOnInit(): void {
    this.createMixedChart();

  }

  createMixedChart(){
  
    const mixedchart = new Chart("MixedChart", {
      type: 'bar', 
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          
          {
            type:'bar',
            label: "Sales",
            data: ['469','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          },  
          {
            type:'line',
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
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
      
    });
    Chart.register(zoomPlugin);

    this.mixedchart = mixedchart

  }

  ngOnDestroy(){
    this.mixedchart.destroy();

  }

}
