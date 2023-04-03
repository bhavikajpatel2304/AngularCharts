import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartForClosedBugsComponent } from './bar-chart-for-closed-bugs.component';

describe('BarChartForClosedBugsComponent', () => {
  let component: BarChartForClosedBugsComponent;
  let fixture: ComponentFixture<BarChartForClosedBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartForClosedBugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartForClosedBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
