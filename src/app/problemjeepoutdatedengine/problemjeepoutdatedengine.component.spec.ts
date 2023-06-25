import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemjeepoutdatedengineComponent } from './problemjeepoutdatedengine.component';

describe('ProblemjeepoutdatedengineComponent', () => {
  let component: ProblemjeepoutdatedengineComponent;
  let fixture: ComponentFixture<ProblemjeepoutdatedengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemjeepoutdatedengineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemjeepoutdatedengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
