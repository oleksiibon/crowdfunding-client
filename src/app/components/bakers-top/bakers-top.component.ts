import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {BakerDTO} from "../../domain/BakerDTO";
import {Baker} from "../../domain/Baker";
import {MatTableDataSource} from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
}


@Component({
  selector: 'app-bakers-top',
  templateUrl: './bakers-top.component.html',
  styleUrls: ['./bakers-top.component.css']
})
export class BakersTopComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Lex', amount: 10000}
  ];
  displayedColumns: string[] = ['position', 'name', 'amount'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  fullBakers: Baker[];
  sortBakers: [] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.fullBakers = data;
      this.dataSource = this.bakersFilter(new Date(1970, 1, 1), this.fullBakers);
    });
  }

  clear($event: MouseEvent, form: NgForm) {

  }

  submit(form: NgForm) {
    const filter = form.value.filter;
    const today = new Date();
    let priorDate: Date;
    if (filter === 'month') {
      priorDate = new Date(new Date().setDate(today.getDate() - 30));
    } else if (filter === 'year') {
      priorDate = new Date(new Date().setDate(today.getDate() - 365));
    } else if (filter === 'day') {
      priorDate = new Date(new Date().setDate(today.getDate() - 1));
    } else {
      priorDate = new Date(1970, 1, 1);
    }
    this.dataSource = this.bakersFilter(priorDate, this.fullBakers);
  }

  bakersFilter(date, bakers: Baker[]) {
    const filtredBakers: BakerDTO[] = [];
    bakers.forEach((baker) => {
      const newBaker: BakerDTO = {position: 0, name: baker.name, amount: 0};
      newBaker.amount = baker
        .donations
        .filter(e => new Date(e.date) > date)
        .reduce((a, b) => a + b.amount, 0);
      filtredBakers.push(newBaker);
    });
    filtredBakers
      .sort((a, b) => b.amount - a.amount)
      .forEach((e, index) => e.position = index + 1);
    return new MatTableDataSource(filtredBakers);

  }
}

