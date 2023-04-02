import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

	constructor(private modalService: NgbModal) {}

	open(content : any) {
		this.modalService.open(content, { size: "xl" });
	}
}
