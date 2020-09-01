import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionListDialogComponent } from './components/dialog/quiz/question-list-dialog/question-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuizPageModule } from './modules/ui/quiz-page/quiz-page.module';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { HelperStepComponent } from './components/quiz/helper-step/helper-step.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkStepperModule,
    MatDialogModule,
    QuizPageModule,
    MatStepperModule,

  ],
  providers: [],
  entryComponents:[QuestionListDialogComponent],
  bootstrap: [AppComponent],
  exports: [HelperStepComponent]
})
export class AppModule { }
