import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

import {QuizPageModule} from  '../../modules/ui/quiz-page/quiz-page.module';
@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    QuizPageModule
   ]
})
export class QuizModule { }
