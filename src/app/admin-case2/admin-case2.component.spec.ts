import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCase2Component } from './admin-case2.component';

describe('AdminCase2Component', () => {
  let component: AdminCase2Component;
  let fixture: ComponentFixture<AdminCase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCase2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
