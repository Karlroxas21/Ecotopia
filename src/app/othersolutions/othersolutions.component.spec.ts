import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersolutionsComponent } from './othersolutions.component';

describe('OthersolutionsComponent', () => {
  let component: OthersolutionsComponent;
  let fixture: ComponentFixture<OthersolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
