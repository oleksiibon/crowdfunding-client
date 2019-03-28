import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Lex', amount: 10000}
];

@Component({
  selector: 'app-bakers-top',
  templateUrl: './bakers-top.component.html',
  styleUrls: ['./bakers-top.component.css']
})
export class BakersTopComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'amount'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

  clear($event: MouseEvent, form: NgForm) {
    
  }

  submit(form: NgForm) {
    
  }
}
