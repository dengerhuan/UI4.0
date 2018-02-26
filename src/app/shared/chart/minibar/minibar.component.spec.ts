import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinibarComponent } from './minibar.component';

describe('MinibarComponent', () => {
  let component: MinibarComponent;
  let fixture: ComponentFixture<MinibarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinibarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
