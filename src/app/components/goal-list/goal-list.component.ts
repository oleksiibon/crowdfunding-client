import {Component, OnInit} from '@angular/core';
import {GoalService} from '../../services/goal.service';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../domain/Category";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  allGoals: any[];
  goals: any[];
  private categories: Category[];
  constructor(private goalService: GoalService,  private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.goalService.getGoals().subscribe(data => {
      console.log(data);
      const goalsDTO = [];
      data.forEach(data1 => {
        let collect = 0;
        data1.donations.forEach((a) => collect += +a.amount);
        data1.collect = collect;
        console.log(data1.category);
        data1.categoryId = data1.category.id;
        data1.category = data1.category.name;
        goalsDTO.push(data1);
      });
      this.goals = this.allGoals = goalsDTO;
    });
    this.categoryService.getGategories().subscribe(data => {
      this.categories = data;
    });
  }

  submit(form: NgForm) {
    const filters = [];
    if (form.value.categoryId  !== '') {
      filters.push(e => e.categoryId === +form.value.categoryId);
    }
    if (form.value.isUser) {
      filters.push (e => e.creator.id === 1);
    }
    if (form.value.isDone  !== '') {
      if (form.value.isDone === 'done') {
        filters.push (e => e.collect >= e.cost);
      } else {
        filters.push (e => e.collect < e.cost);
      }
    }
    this.filterGoals(filters);
  }

  clear($event: MouseEvent, form: NgForm) {
    $event.preventDefault();
    this.goals = this.allGoals;
    form.resetForm();
  }

  filterGoals(filters) {
    this.goals = this.allGoals;
    filters.forEach(filter => {
      this.goals = this.goals.filter(filter);
    });
  }

  goTo($event: MouseEvent, id: any) {
    this.router.navigate([`goal/${id}`]);
  }
}
