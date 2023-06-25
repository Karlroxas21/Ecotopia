import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemtrashComponent } from './problemtrash.component';

describe('ProblemtrashComponent', () => {
  let component: ProblemtrashComponent;
  let fixture: ComponentFixture<ProblemtrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemtrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemtrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
