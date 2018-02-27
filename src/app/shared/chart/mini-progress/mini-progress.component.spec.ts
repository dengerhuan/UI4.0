import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProgressComponent } from './mini-progress.component';

describe('MiniProgressComponent', () => {
  let component: MiniProgressComponent;
  let fixture: ComponentFixture<MiniProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
