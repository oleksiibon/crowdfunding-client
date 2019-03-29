import {Component, OnInit} from '@angular/core';
import {Auth1Service} from './auth1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Crowdfunding';
  constructor() {
  }

  ngOnInit() {
  }
}
