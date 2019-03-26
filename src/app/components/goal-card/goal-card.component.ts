import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../../domain/Goal';
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {
  // goal: Goal = {name: 'Artifact',
  //   category: 'Computer game',
  //   cost: 500,
  //   picture: 'https://upload.wikimedia.org/wikipedia/ru/d/de/Artifact_game.jpg',
  //   collect: 10
  // };
  @Input() goal;
  progress: string;
  constructor(private goalServise: GoalService) { }

  ngOnInit() {
    this.progress = (this.goal.collect * 100 / this.goal.cost) +  '%';
    this.goalServise.getGoals().subscribe();
  }

}
