import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {CallbackComponent} from './components/callback/callback.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import {GoalFormComponent} from './components/goal-form/goal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoalCardComponent} from './components/goal-card/goal-card.component';
import {HttpClientModule} from "@angular/common/http";
import {GoalListComponent} from './components/goal-list/goal-list.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FullGoalComponent} from './components/full-goal/full-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    GoalFormComponent,
    GoalCardComponent,
    GoalListComponent,
    SidebarComponent,
    FullGoalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
