import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet,Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input()
  sharingInfo : any ;

  constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS.
    doughnutChartOptions = {
        responsive: true
    }

    doughnutChartLabels =  ['Filled', 'Vacant', 'Reserve'];

    // CHART COLOR.
    doughnutChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    doughnutChartData:any =[];

    ngOnInit () {
        //TODO : Call the API with hostelId then get the data and populate here 
        this.httpService.get('', {responseType: 'json'}).subscribe(
            data => {
                this.doughnutChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );

        this.doughnutChartData = [
            {
                data: this.sharingInfo.data
            }
        ];
    }

    onChartClick(event) {
        console.log(event);
    }
}

