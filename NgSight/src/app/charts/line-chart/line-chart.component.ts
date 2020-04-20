import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS} from '../../shared/chart.colors'



const SAMPLE_LINECHART_DATA: any[] = [
  {data: [6, 21, 43, 23, 14, 13, 50] , label: 'Computers'},
  {data: [9, 23, 63, 13, 44, 33, 19] , label: 'Cameras'},
  {data: [17, 12, 43, 63, 14, 33, 19] , label: 'Televisions'}
] 

const SAMPLE_LINECHART_LABELS: string[] = [ 'W1', 'W2', 'W3', 'W5', 'W6', 'W7']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData: any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    responsive: true
  }
  public lineChartColors = LINE_CHART_COLORS;


  ngOnInit() {
  }

}
