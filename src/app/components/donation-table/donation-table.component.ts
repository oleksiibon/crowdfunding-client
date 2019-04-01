import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-donation-table',
  templateUrl: './donation-table.component.html',
  styleUrls: ['./donation-table.component.css']
})
export class DonationTableComponent implements OnInit {
  @Input() baker;
  @Input() goal;
  @Input() donations;
  displayedColumns: string[] = ['position', 'amount'];
  dataSource = new MatTableDataSource([
    {position: 1, baker: 'Lex', amount: 10000, goal: 'Monopoly'}
  ]);
  constructor() { }

  ngOnInit() {
    if (this.baker) {
      this.displayedColumns.push('baker');
    }
    if (this.goal) {
      this.displayedColumns.push('goal');
    }
    console.dir(this.donations);
    this.donations.forEach((e, index) => {
      e.position = index + 1;
      try {
        e.baker = e.user.name;
      } catch (error) {
        e.baker  = '';
      }
      try {
        e.goal = e.goal.name;
      } catch (error) {
        e.goal  = '';
      }});
    this.dataSource = this.donations.slice(0, 5);
  }

}
