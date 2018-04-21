import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNetworkOverviewComponent } from './full-network-overview.component';

describe('FullNetworkOverviewComponent', () => {
  let component: FullNetworkOverviewComponent;
  let fixture: ComponentFixture<FullNetworkOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNetworkOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNetworkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
