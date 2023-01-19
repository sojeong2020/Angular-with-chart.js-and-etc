import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public piechart: any;

  constructor() { }

  ngOnInit(): void {
    this.createPieChart();

  }

  createPieChart(){
  
    const pieChart = new Chart("PieChart", {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: [ 'Red','Blue','Yellow' ], 
	      datasets: [{
            label: 'My First Dataset',
            data: [300,50,100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
      //Zoom options is not available in pie/doughunt chart
  

      });

      this.piechart = pieChart

    }

    ngOnDestroy(){
    this.piechart.destroy();

  }


}
