import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Baker} from '../../domain/Baker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  baker: Baker;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(data => {
      this.baker = data;
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
