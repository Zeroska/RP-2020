import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionListDialogComponent } from './components/dialog/quiz/question-list-dialog/question-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuizPageModule } from './modules/ui/quiz-page/quiz-page.module';
@NgModule({
  declarations: [
    AppComponent,
    QuestionListDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    QuizPageModule,
  ],
  providers: [],
  entryComponents:[QuestionListDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
