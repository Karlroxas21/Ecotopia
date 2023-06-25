import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentresourcesComponent } from './governmentresources.component';

describe('GovernmentresourcesComponent', () => {
  let component: GovernmentresourcesComponent;
  let fixture: ComponentFixture<GovernmentresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentresourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
