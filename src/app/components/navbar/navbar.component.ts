import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Baker} from '../../domain/Baker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  baker: Baker;
  isLogin = false;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(data => {
      this.baker = data;
    });
  }
  ngDoCheck() {
    if (localStorage.getItem('currentUser') === null) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.goTo('/login');
  }
}
