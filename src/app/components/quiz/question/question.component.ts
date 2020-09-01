import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionListDialogComponent } from '../../dialog/quiz/question-list-dialog/question-list-dialog.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Output() onHelp:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private questionDialog:MatDialog) { }

  ngOnInit(): void {
  }

  turnOnHelp(){
    this.onHelp.emit(true)
  }

  openQuestionListDialog(){
    this.questionDialog.open(QuestionListDialogComponent)
  }

}
