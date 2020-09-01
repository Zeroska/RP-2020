import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as fakeData from '../../../models/fakeData';
import { HelpQuestion } from 'src/app/models/help-question.model';
import { SubQuestion } from 'src/app/models/help-sub-question.models';
@Component({
  selector: 'app-helper-step',
  templateUrl: './helper-step.component.html',
  styleUrls: ['./helper-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperStepComponent implements OnInit {

  @Input() subQuestion:SubQuestion;
  constructor() { 
  }

  
  ngOnInit(): void {
  }

}
