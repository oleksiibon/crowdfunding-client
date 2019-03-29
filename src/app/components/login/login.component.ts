import {Component, OnInit} from '@angular/core';
import {Auth1Service} from "../../auth1.service";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login('aleseyko', '123').subscribe(data => {
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      localStorage.setItem('username', this.parseJwt(data.token).sub);
    });

  }

  parseJwt(token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}
