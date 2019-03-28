import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<{token: string}> {
    return this.httpClient.post<{token: string}>(this.authUrl, { username, password });
  }
}
