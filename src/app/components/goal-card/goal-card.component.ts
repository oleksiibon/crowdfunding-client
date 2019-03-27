import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import {Goal} from '../../domain/Goal';
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements AfterViewInit, DoCheck {
  // goal: Goal = {name: 'Artifact',
  //   category: 'Computer game',
  //   cost: 500,
  //   picture: 'https://upload.wikimedia.org/wikipedia/ru/d/de/Artifact_game.jpg',
  //   collect: 10
  // };
  @Input() goal;
  progress: string;
  percent: any;
  constructor(private goalServise: GoalService) { }

  ngAfterViewInit() {
    this.getProgressAndPercent();
  }

  ngDoCheck() {
    console.log('changes');
    this.getProgressAndPercent();
  }

  getProgressAndPercent() {
    this.progress = (this.goal.collect * 100 / this.goal.cost) +  '%';
    this.percent = Math.floor(this.goal.collect * 100 / this.goal.cost);
  }
}
