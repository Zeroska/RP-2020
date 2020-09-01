import { Component, OnInit, Input } from '@angular/core';
import { HelpQuestion } from 'src/app/models/help-question.model';

@Component({
  selector: 'app-help-selected-index',
  templateUrl: './help-selected-index.component.html',
  styleUrls: ['./help-selected-index.component.scss']
})
export class HelpSelectedIndexComponent implements OnInit {

  @Input() selectedHelp;
  @Input() questionData:HelpQuestion;
  constructor() { }

  ngOnInit(): void {
  }

}
