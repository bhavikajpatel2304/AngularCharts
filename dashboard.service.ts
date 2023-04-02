import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getBugData(){
    return this.http.get('http://127.0.0.1:5000/bhavika/bug')
  }

  
  getProjectData(){
    return this.http.get('http://127.0.0.1:5000/bhavika/project')
  }
}
