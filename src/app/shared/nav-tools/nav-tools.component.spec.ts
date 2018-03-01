import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolsComponent } from './nav-tools.component';

describe('NavToolsComponent', () => {
  let component: NavToolsComponent;
  let fixture: ComponentFixture<NavToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
