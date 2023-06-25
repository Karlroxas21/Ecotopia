import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesofclimatechangeComponent } from './causesofclimatechange.component';

describe('CausesofclimatechangeComponent', () => {
  let component: CausesofclimatechangeComponent;
  let fixture: ComponentFixture<CausesofclimatechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausesofclimatechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausesofclimatechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
