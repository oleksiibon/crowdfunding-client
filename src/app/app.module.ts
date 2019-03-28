import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Auth1Service} from './auth1.service';
import {CallbackComponent} from './components/callback/callback.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {GoalFormComponent} from './components/goal/goal-form/goal-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoalCardComponent} from './components/goal/goal-card/goal-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GoalListComponent} from './components/goal/goal-list/goal-list.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FullGoalComponent} from './components/goal/full-goal/full-goal.component';
import { LoginComponent } from './components/login/login.component';
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BakersTopComponent } from './components/bakers-top/bakers-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    GoalFormComponent,
    GoalCardComponent,
    GoalListComponent,
    SidebarComponent,
    FullGoalComponent,
    LoginComponent,
    NavbarComponent,
    BakersTopComponent,
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
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
