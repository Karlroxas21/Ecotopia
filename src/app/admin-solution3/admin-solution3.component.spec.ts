import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolution3Component } from './admin-solution3.component';

describe('AdminSolution3Component', () => {
  let component: AdminSolution3Component;
  let fixture: ComponentFixture<AdminSolution3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolution3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSolution3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
