import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '../dashboard.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public devInfo: any[] = [];
  public qaInfo: any[] = [];
  public bugInfo: any[] = [];
  public openBugInfo: any[] = [];
  public closedBugInfo: any[] = [];
  public projectInfo: any[] = [];
  public bugInfoForChart: any[] = [];
  public openBugInfoForChart: any[] = [];
  public closedBugInfoForChart: any[] = [];
 
	constructor(private modalService: NgbModal, private service: DashboardService) {}

	open(content : any) {
		this.modalService.open(content, { size: "xl" });
	}

  ngOnInit() {
    this.service.getDevData().subscribe((response:any) => {
      this.devInfo =  response.data.member_details.filter((d:any) => d.role === "DEV")
      this.qaInfo =  response.data.member_details.filter((d:any) => d.role === "QA")
    });

    this.service.getBugInfoData().subscribe((response:any) => {
      this.bugInfoForChart =  response.data.bug_details;
      this.openBugInfoForChart =  response.data.bug_details.filter((d: any) => d.status.toLowerCase().includes("open"));
      this.closedBugInfoForChart =  response.data.bug_details.filter((d: any) => d.status.toLowerCase().includes("closed"));
    });

    this.service.getBugData().subscribe((response:any) => {
      this.bugInfo = response.data.bug_details;
      this.openBugInfo =  response.data.bug_details.filter((b:any) => b.status.toLowerCase().includes("open"))
      this.closedBugInfo =  response.data.bug_details.filter((b:any) => b.status.toLowerCase().includes("closed"))

      this.service.getProjectData().subscribe((response:any) => {
        this.projectInfo =  response.data.project_details
      });

      new Chart("areaChart", {
        type: 'line',
        data: {
            labels: this.bugInfo.map((r:any) => r.title),
            datasets: [{
                data: this.bugInfo.map((r:any) => new Date(r.deadline).getMonth()),
                borderWidth: 1,
                fill: "start",
                backgroundColor : "rgba(133, 132, 216, 0.6)"
            }]
        },
        options: {
          responsive: true,
          elements: { line: { tension: 0.4 }},
          plugins: {
            legend: {
              display: false
            }
          }
        }
    });

  })
}
}