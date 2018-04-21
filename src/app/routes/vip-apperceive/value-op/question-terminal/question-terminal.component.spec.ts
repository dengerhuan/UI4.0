import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTerminalComponent } from './question-terminal.component';

describe('QuestionTerminalComponent', () => {
  let component: QuestionTerminalComponent;
  let fixture: ComponentFixture<QuestionTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
