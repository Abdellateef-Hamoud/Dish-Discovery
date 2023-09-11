import { Component, OnInit } from '@angular/core';
import { MealdbService } from '../services/mealdb.service';
import { CategoryMeal } from '../models/category-meal';
import { Category } from '../models/category';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  meals: CategoryMeal[] = [];
  categories: Category[] = [];
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 8; // Number of items to display per page

  constructor(private mealdbService: MealdbService, private router : Router) {

  }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals() {
    this.mealdbService.getAllCategories().subscribe(
      (response: any) => {
        this.categories = response.categories;

        // Create an array of observables using map
        const observables = this.categories.map(category =>
          this.mealdbService.getAllMealsByCategory(category)
        );

        // Use forkJoin to combine all observables into a single observable
        forkJoin(observables).subscribe(
          (responses: any[]) => {
            // Flatten the array of responses and extract the 'meals' array
            this.meals = responses.flatMap(response => response.meals);
          },
          (error: any) => {
            console.error('Error fetching meals:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Function to calculate the total number of pages
  getTotalPages(): number {
    return Math.ceil(this.meals.length / this.itemsPerPage);
  }

  // Function to navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // Function to navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  showIngredients(recpieId: string){
    this.router.navigate([`/reciedetails/${recpieId}`])
  }

}
