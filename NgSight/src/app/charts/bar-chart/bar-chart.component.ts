import { Component, OnInit } from '@angular/core';


const SAMPLE_BARCHART_DATA: any[] = [
  {data: [6, 21, 43, 23, 14, 13, 50] , label: 'Q1 Sales'},
  {data: [9, 23, 63, 13, 44, 33, 19] , label: 'Q2 Sales'},
] 

const SAMPLE_BARCHART_LABELS: string[] = [ 'W1', 'W2', 'W3', 'W5', 'W6', 'W7']

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  constructor() { }

  ngOnInit() {
  }

}
