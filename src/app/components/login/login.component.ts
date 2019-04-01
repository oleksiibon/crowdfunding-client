import {Component, OnInit} from '@angular/core';
import {Auth1Service} from '../../auth1.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(f: HTMLFormElement) {
    this.authService.login(f.value.login, f.value.password).subscribe(data => {
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      localStorage.setItem('username', this.parseJwt(data.token).sub);
      this.router.navigate(['/goals']);
    }, err => {alert('Something wrong'); });

  }

  parseJwt(token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}
