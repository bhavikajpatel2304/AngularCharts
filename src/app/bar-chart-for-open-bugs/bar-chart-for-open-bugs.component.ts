import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart-for-open-bugs',
  templateUrl: './bar-chart-for-open-bugs.component.html',
  styleUrls: ['./bar-chart-for-open-bugs.component.css']
})
export class BarChartForOpenBugsComponent {

  @Input() data : any[] = []; 
	constructor() {}

  ngOnInit() {

  new Chart("barChartForOpenBugs", {
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
