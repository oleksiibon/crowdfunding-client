import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Baker} from '../domain/Baker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  baker: Baker;
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(data => {
      this.baker = data;
      console.log(this.baker.donations);
    });
  }

  addMoney(amount: string) {
    this.userService.addMoney(this.baker.username, +amount).subscribe(() => {
      this.baker.balance += +amount;
    });
  }
}
