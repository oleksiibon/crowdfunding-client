import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallbackComponent} from './components/callback/callback.component';
import {GoalFormComponent} from './components/goal-form/goal-form.component';

const routes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'home', redirectTo: '/'},
  {path: 'add-goal', component: GoalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
