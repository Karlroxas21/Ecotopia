import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeactionComponent } from './takeaction.component';

describe('TakeactionComponent', () => {
  let component: TakeactionComponent;
  let fixture: ComponentFixture<TakeactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
