import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProheadComponent } from './prohead.component';

describe('ProheadComponent', () => {
  let component: ProheadComponent;
  let fixture: ComponentFixture<ProheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
