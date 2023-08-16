import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolution1Component } from './admin-solution1.component';

describe('AdminSolution1Component', () => {
  let component: AdminSolution1Component;
  let fixture: ComponentFixture<AdminSolution1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolution1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSolution1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
