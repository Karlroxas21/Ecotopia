import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewOfClimateChangeComponent } from './overview-of-climate-change.component';

describe('OverviewOfClimateChangeComponent', () => {
  let component: OverviewOfClimateChangeComponent;
  let fixture: ComponentFixture<OverviewOfClimateChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewOfClimateChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewOfClimateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
