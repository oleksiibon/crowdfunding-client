import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoalService} from '../../../services/goal.service';
import {Goal} from '../../../domain/Goal';
import {NgForm} from '@angular/forms';
import {DonateService} from '../../../services/donate.service';
import {Donation} from '../../../domain/Donation';

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
    const donation: Donation = new Donation();
    donation.date = new Date();
    donation.userId = localStorage.getItem('username');
    donation.goalId = this.goalId;
    donation.amount = form.value.amount;
    this.donateService.send(donation).subscribe(() => {
      this.goal.collect += +form.value.amount;
      form.resetForm();
    }, err => {
      alert(err.error);
    });
  }
}
