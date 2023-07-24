import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCasesProblemtrashComponent } from './admin-cases-problemtrash.component';

describe('AdminCasesProblemtrashComponent', () => {
  let component: AdminCasesProblemtrashComponent;
  let fixture: ComponentFixture<AdminCasesProblemtrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCasesProblemtrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCasesProblemtrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
