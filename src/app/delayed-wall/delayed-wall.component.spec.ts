import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedWallComponent } from './delayed-wall.component';

describe('DelayedWallComponent', () => {
  let component: DelayedWallComponent;
  let fixture: ComponentFixture<DelayedWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
