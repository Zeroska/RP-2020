import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{ path: '', loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule) }, 
{ path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
