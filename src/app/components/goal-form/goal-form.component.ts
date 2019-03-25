import { Component, OnInit } from '@angular/core';

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
  categories: Category[] = [{name: 'Sport', id: 1}, {name: 'Chess', id: 2}];
  constructor() { }

  ngOnInit() {
  }

}
