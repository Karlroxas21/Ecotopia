import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCase3Component } from './admin-case3.component';

describe('AdminCase3Component', () => {
  let component: AdminCase3Component;
  let fixture: ComponentFixture<AdminCase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCase3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
