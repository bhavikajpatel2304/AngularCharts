import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() data : any[] = []; 
	constructor() {}

  ngOnInit() {

  new Chart("pieChart", {
    type: 'pie',
    data: {
        labels: this.data.map((r:any) => r.title),
        datasets: [{
            label: "Month",
            data: this.data.map((r:any) => new Date(r.deadline).getMonth()),
            borderWidth: 1,
            backgroundColor : Object.values(['#0088FE', '#00C49F', '#FFBB28', '#FF8042']),
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        }
    }
    }
});
}
}