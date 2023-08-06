import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCase1Component } from './admin-case1.component';

describe('AdminCase1Component', () => {
  let component: AdminCase1Component;
  let fixture: ComponentFixture<AdminCase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCase1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
