import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondingtoclimatechangeComponent } from './respondingtoclimatechange.component';

describe('RespondingtoclimatechangeComponent', () => {
  let component: RespondingtoclimatechangeComponent;
  let fixture: ComponentFixture<RespondingtoclimatechangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondingtoclimatechangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondingtoclimatechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
