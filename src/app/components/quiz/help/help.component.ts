import { Component, OnInit, Input } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { HelpQuestion } from 'src/app/models/help-question.model';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  selectedIndex:number =0;

  @Input() helpQuestion:Array<HelpQuestion>;
  constructor() { }

  ngOnInit(): void {
  }
  
  logger(event:StepperSelectionEvent){
    console.log(event)
    this.selectedIndex = event.selectedIndex;
  }
}
