import { Component, OnInit } from '@angular/core';
import fakeData from 'src/app/models/fakeData';
import { HelpQuestion } from 'src/app/models/help-question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  data:HelpQuestion
  onHelp:boolean = false;
  listOfData:Array<HelpQuestion>
  constructor() {
    this.data = fakeData.fakeSubQuestion;
    this.listOfData = fakeData.listOfHelpQuestion;
   }

  ngOnInit(): void {
  }

  turnonHelp(flag:boolean){
    this.onHelp = flag
  }

}
