import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from './auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import {FormsModule, NgModel} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import {HttpClientModule} from "@angular/common/http";
import { GoalListComponent } from './components/goal-list/goal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    GoalFormComponent,
    GoalCardComponent,
    GoalListComponent,
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
