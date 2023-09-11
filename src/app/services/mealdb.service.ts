import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap } from 'rxjs';
import { CategoryMeal } from '../models/category-meal';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class MealdbService {

  apiBaseUrl: string = "https://www.themealdb.com/api/json/v1/1";

  constructor(private http: HttpClient) { }

  getAllCategories() : Observable<any> {
    var items =  this.http.get(`${this.apiBaseUrl}/categories.php`);
    console.log(items.subscribe((response: any) => console.log(response.categories)));
    return items;
  }

  getAllMealsByCategory(category: Category): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/filter.php?c=${category.strCategory}`);
  }
}
