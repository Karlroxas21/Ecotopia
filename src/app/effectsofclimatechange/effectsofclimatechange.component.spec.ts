import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsofclimatechangeComponent } from './effectsofclimatechange.component';

describe('EffectsofclimatechangeComponent', () => {
  let component: EffectsofclimatechangeComponent;
  let fixture: ComponentFixture<EffectsofclimatechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectsofclimatechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectsofclimatechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
