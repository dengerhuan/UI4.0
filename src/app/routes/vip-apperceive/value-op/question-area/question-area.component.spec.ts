import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAreaComponent } from './question-area.component';

describe('QuestionAreaComponent', () => {
  let component: QuestionAreaComponent;
  let fixture: ComponentFixture<QuestionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
