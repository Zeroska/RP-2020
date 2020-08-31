import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionListDialogComponent } from '../../dialog/quiz/question-list-dialog/question-list-dialog.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private questionDialog:MatDialog) { }

  ngOnInit(): void {
  }

  openQuestionListDialog(){
    this.questionDialog.open(QuestionListDialogComponent)
  }

}
