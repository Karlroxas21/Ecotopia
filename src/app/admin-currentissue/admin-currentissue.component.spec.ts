import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrentissueComponent } from './admin-currentissue.component';

describe('AdminCurrentissueComponent', () => {
  let component: AdminCurrentissueComponent;
  let fixture: ComponentFixture<AdminCurrentissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCurrentissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCurrentissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
