import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeaturesComponent } from './news-features.component';

describe('NewsFeaturesComponent', () => {
  let component: NewsFeaturesComponent;
  let fixture: ComponentFixture<NewsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
