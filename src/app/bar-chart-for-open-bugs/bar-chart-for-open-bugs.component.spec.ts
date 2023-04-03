import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartForOpenBugsComponent } from './bar-chart-for-open-bugs.component';

describe('BarChartForOpenBugsComponent', () => {
  let component: BarChartForOpenBugsComponent;
  let fixture: ComponentFixture<BarChartForOpenBugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartForOpenBugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartForOpenBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
