import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() data : any[] = []; 
	constructor() {}

  ngOnInit() {

  new Chart("barChart", {
    type: 'bar',
    data: {
        labels: this.data.map((r:any) => r.title),
        datasets: [{
            label: "Year",
            data: this.data.map((r:any) => new Date(r.deadline).getUTCFullYear()),
            borderWidth: 1,
            backgroundColor : "rgba(133, 132, 216, 0.6)",
            barThickness: 30,
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        }
      },
      scales: {
        y: {
            min: 2020,
            max: 2025,
            ticks: {
              display: true,
              stepSize: 1000
            }
        }
    }
    }
});
}
}
