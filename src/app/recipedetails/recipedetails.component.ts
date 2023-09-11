import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealdbService } from '../services/mealdb.service';
import { MealDetails } from '../models/meal-details';


@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

  selectedRecipeId!: string | null;
  selectedRecipe!: MealDetails;
  ingredients: string[] = [];
  instructions: string[] = [];

  constructor(private route: ActivatedRoute, private mealdbService : MealdbService) {

  }
  ngOnInit(): void {
    this.selectedRecipeId = this.route.snapshot.paramMap.get('id');

    this.mealdbService.getRecipeDetails(this.selectedRecipeId).subscribe((response : any) => {
      
      this.selectedRecipe = response.meals[0];

      if (this.selectedRecipe) {
        // Map the ingredients
        for (let i = 1; i <= 20; i++) {
          const ingredientKey = `strIngredient${i}` as keyof MealDetails;
          const measureKey = `strMeasure${i}` as keyof MealDetails;
          const ingredient = this.selectedRecipe[ingredientKey];
          const measure = this.selectedRecipe[measureKey];
          if (ingredient && ingredient.trim() !== '') {
            this.ingredients.push(`${measure} ${ingredient}`);
          }
        }
      }

      // Split instructions by line breaks
      this.instructions = this.selectedRecipe.strInstructions.split('\r\n');

    });
  }
}
