import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrentIssuesPhComponent } from './admin-current-issues-ph.component';

describe('AdminCurrentIssuesPhComponent', () => {
  let component: AdminCurrentIssuesPhComponent;
  let fixture: ComponentFixture<AdminCurrentIssuesPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCurrentIssuesPhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCurrentIssuesPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
