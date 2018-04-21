import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSpComponent } from './question-sp.component';

describe('QuestionSpComponent', () => {
  let component: QuestionSpComponent;
  let fixture: ComponentFixture<QuestionSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
