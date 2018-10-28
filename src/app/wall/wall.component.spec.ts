import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallComponent } from './wall.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SearchService} from '../services/search.service';

describe('WallComponent', () => {
  let component: WallComponent;
  let fixture: ComponentFixture<WallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallComponent ],
      providers: [SearchService],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
