import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataschemaComponent } from './dataschema.component';

describe('DataschemaComponent', () => {
  let component: DataschemaComponent;
  let fixture: ComponentFixture<DataschemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataschemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataschemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
