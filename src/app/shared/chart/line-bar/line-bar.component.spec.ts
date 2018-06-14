import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineBarComponent } from './line-bar.component';

describe('LineBarComponent', () => {
  let component: LineBarComponent;
  let fixture: ComponentFixture<LineBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
