import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivevideoComponent } from './interactivevideo.component';

describe('InteractivevideoComponent', () => {
  let component: InteractivevideoComponent;
  let fixture: ComponentFixture<InteractivevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractivevideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractivevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
