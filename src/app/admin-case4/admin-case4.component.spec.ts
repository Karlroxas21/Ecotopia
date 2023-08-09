import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCase4Component } from './admin-case4.component';

describe('AdminCase4Component', () => {
  let component: AdminCase4Component;
  let fixture: ComponentFixture<AdminCase4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCase4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCase4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
