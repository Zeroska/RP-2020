import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListDialogComponent } from './question-list-dialog.component';

describe('QuestionListDialogComponent', () => {
  let component: QuestionListDialogComponent;
  let fixture: ComponentFixture<QuestionListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
