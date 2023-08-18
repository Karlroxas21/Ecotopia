import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolution2Component } from './admin-solution2.component';

describe('AdminSolution2Component', () => {
  let component: AdminSolution2Component;
  let fixture: ComponentFixture<AdminSolution2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolution2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSolution2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
