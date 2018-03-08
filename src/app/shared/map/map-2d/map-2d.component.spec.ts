import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Map2dComponent } from './map-2d.component';

describe('Map2dComponent', () => {
  let component: Map2dComponent;
  let fixture: ComponentFixture<Map2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Map2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Map2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
