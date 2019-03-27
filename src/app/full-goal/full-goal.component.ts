import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoalService} from "../services/goal.service";
import {Goal} from "../domain/Goal";
import {NgForm} from "@angular/forms";
import {DonateService} from "../services/donate.service";

@Component({
  selector: 'app-full-goal',
  templateUrl: './full-goal.component.html',
  styleUrls: ['./full-goal.component.css']
})
export class FullGoalComponent implements OnInit {
  goalId: number;
  goal: any;
  constructor(private route: ActivatedRoute, private goalService: GoalService, private donateService: DonateService) { }

  ngOnInit() {
    this.route.params.subscribe(data => this.goalId = data.id);
    this.goalService.getGoal(this.goalId).subscribe(data => {
      let collect = 0;
      data.donations.forEach((a) => collect += +a.amount);
      data.collect = collect;
      console.log(data.category);
      data.category = data.category.name;
      this.goal = data;
      console.log(this.goal);
    });
  }

  onSubmit(form: NgForm) {
    const donate: object = {};
    donate.date = new Date();
    donate.userId = 0;
    donate.goalId = this.goalId;
    donate.amount = form.value.amount;
    this.donateService.send(donate).subscribe(() => this.goal.collect += +form.value.amount);
  }
}
