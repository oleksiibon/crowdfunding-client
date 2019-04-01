import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Baker} from '../domain/Baker';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/api/user';


  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(this.userUrl + '/' + username);
  }

  addMoney(username: string, amount: number): Observable<any> {
    return this.http.put(this.userUrl + '/' + username, {balance: amount});
  }
}
