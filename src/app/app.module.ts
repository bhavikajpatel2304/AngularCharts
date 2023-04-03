import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UditComponent } from './udit/udit.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BugComponent } from './bug/bug.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerNavbarComponent } from './drawer-navbar/drawer-navbar.component';
import { MatTabsModule } from '@angular/material/tabs';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarChartForOpenBugsComponent } from './bar-chart-for-open-bugs/bar-chart-for-open-bugs.component';
import { BarChartForClosedBugsComponent } from './bar-chart-for-closed-bugs/bar-chart-for-closed-bugs.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    UditComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectComponent,
    BugComponent,
    DrawerNavbarComponent,
    CanvasJSChart,
    BarChartComponent,
    BarChartForOpenBugsComponent,
    BarChartForClosedBugsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
