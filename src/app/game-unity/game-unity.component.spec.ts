import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameUnityComponent } from './game-unity.component';

describe('GameUnityComponent', () => {
  let component: GameUnityComponent;
  let fixture: ComponentFixture<GameUnityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameUnityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
