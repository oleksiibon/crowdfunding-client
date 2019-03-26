import {Component, OnInit} from '@angular/core';
import {GoalService} from '../../services/goal.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  goals: any;
  constructor(private goalService: GoalService) {
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
        data1.category = data1.category.name;
        goalsDTO.push(data1);
      });
      this.goals = goalsDTO;
    });
  }

}
