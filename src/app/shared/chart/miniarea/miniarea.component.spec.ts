import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniareaComponent } from './miniarea.component';

describe('MiniareaComponent', () => {
  let component: MiniareaComponent;
  let fixture: ComponentFixture<MiniareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
