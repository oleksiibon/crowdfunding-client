import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallbackComponent} from './components/callback/callback.component';
import {GoalFormComponent} from './components/goal/goal-form/goal-form.component';
import {GoalCardComponent} from './components/goal/goal-card/goal-card.component';
import {GoalListComponent} from './components/goal/goal-list/goal-list.component';
import {FullGoalComponent} from './components/goal/full-goal/full-goal.component';
import {LoginComponent} from './components/login/login.component';
import {BakersTopComponent} from './components/bakers-top/bakers-top.component';

const routes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'home', redirectTo: '/'},
  {path: 'add-goal', component: GoalFormComponent},
  {path: 'goal/:id', component: FullGoalComponent},
  {path: 'goals', component: GoalListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bakers/top', component: BakersTopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
