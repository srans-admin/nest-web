import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})



export class BarChartComponent { 

  @Input()
  barchartInfo: any;
  
 // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true
  }

  constructor (private httpService: HttpClient) { }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // OBJECT FOR datasets WITH EMPTY data.
  chartData = [
    {
      label: 'joined trend',
      data: [ ],
    },
   ];

   // CHART COLOR.
   colors = [

    {
     // joined trend.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
   ]

    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        data => {
            this.chartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
        );
    }

  onChartClick(event) {
    console.log(event);
  }
}
