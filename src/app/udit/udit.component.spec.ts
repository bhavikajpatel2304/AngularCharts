import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UditComponent } from './udit.component';

describe('UditComponent', () => {
  let component: UditComponent;
  let fixture: ComponentFixture<UditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
