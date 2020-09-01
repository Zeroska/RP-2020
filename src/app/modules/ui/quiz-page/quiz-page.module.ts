import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from 'src/app/components/nav/nav.component';
import {QuestionComponent} from '../../../components/quiz/question/question.component';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {HelpComponent} from '../../../components/quiz/help/help.component'
import { HelpSelectedIndexComponent } from 'src/app/components/quiz/help-selected-index/help-selected-index.component';
import { HelperStepComponent } from 'src/app/components/quiz/helper-step/helper-step.component';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [NavComponent,QuestionComponent,HelpComponent,HelpSelectedIndexComponent,HelperStepComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatStepperModule,
    MatRadioModule

    
  ],
  exports:[
    NavComponent,QuestionComponent,HelpComponent,HelpSelectedIndexComponent,HelperStepComponent
  ]
})

export class QuizPageModule { }
