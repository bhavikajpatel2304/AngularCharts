import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent {
  displayedColumns = ['title','description', 'status', 'priority', 'deadline'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getBugData().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response.data.bug_details);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }

  filterBugData($event : any){
    this.dataSource.filter = $event.target.value;
  }
}
