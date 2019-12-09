import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

 public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels = ['2017', '2018', '2019', '2020', '2021'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData = [
    { data: [40, 55, 60, 70, 46, 33], label: 'Joining Trend' }
  ];


  constructor() {
    
  }

  ngOnInit() {
  }

}
