import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  

  constructor() { }

  pieChartData: number[] =[12, 23, 45, 20];
  pieChartLabels: string[] = ["ABC Logistics", "Main Stree Bakery", "John", "Orange Consulting"];
  colors: any[] = [{
    backgroundColor: ['#2654c', '#ff6b6b', '#ffd166', 'violet']
    }
  ];
  pieChartType = 'pie';


  ngOnInit() {
  }

}
