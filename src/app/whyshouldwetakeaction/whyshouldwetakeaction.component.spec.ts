import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyshouldwetakeactionComponent } from './whyshouldwetakeaction.component';

describe('WhyshouldwetakeactionComponent', () => {
  let component: WhyshouldwetakeactionComponent;
  let fixture: ComponentFixture<WhyshouldwetakeactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyshouldwetakeactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyshouldwetakeactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
