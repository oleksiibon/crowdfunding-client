import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  private donateUrl = 'http://localhost:8080/api/donation';
  constructor(private http: HttpClient) { }

  send(body): Observable<any> {
    return this.http.post(this.donateUrl, body);
  }
}
