import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {GoalService} from "../../services/goal.service";
import {Goal} from "../../domain/Goal";
import {CategoryService} from "../../services/category.service";

export interface Category {
  name: string;
  id: number;
}

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})

export class GoalFormComponent implements OnInit {
  userId = 1;
  categories: Array<Category> = [{name: 'Sport', id: 1}, {name: 'Chess', id: 2}];
  constructor(private goalService: GoalService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getGategories().subscribe(data => {
      this.categories = data;
    });
  }
  onSubmit(f: NgForm) {
    const goal: Goal = f.value;
    goal.creatorId = this.userId;
    this.goalService.addGoals(goal).subscribe(data => {
      console.log(data);
    });
  }

  reset($event: MouseEvent, f: NgForm) {
    $event.preventDefault();
    f.resetForm();

  }
}
