import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaValueSearchComponent } from './area-value-search.component';

describe('AreaValueSearchComponent', () => {
  let component: AreaValueSearchComponent;
  let fixture: ComponentFixture<AreaValueSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaValueSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaValueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
