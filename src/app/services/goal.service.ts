import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Goal} from '../domain/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalUrl = 'http://localhost:8080/api/goal';
  constructor(private http: HttpClient) { }

  getGoals(): Observable<any> {
    return this.http.get(this.goalUrl);
}
  addGoals(goal: Goal): Observable<any> {
    return this.http.post(this.goalUrl, goal);
  }
  getGoal(goalId: number): Observable<any> {
    return this.http.get(this.goalUrl + '/' + goalId);
  }
}
