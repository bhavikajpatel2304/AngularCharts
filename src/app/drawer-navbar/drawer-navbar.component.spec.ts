import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerNavbarComponent } from './drawer-navbar.component';

describe('DrawerNavbarComponent', () => {
  let component: DrawerNavbarComponent;
  let fixture: ComponentFixture<DrawerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
