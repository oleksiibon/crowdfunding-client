import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Goal} from '../domain/Goal';
import {Category} from '../domain/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private goalUrl = 'http://localhost:8080/api/category';
  constructor(private http: HttpClient) { }

  getGategories(): Observable<Array<Category>> {
    return this.http.get(this.goalUrl);
  }

}
