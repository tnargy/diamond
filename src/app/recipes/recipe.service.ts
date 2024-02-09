import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test 1',
      'This is a test.',
      'https://www.japanesecooking101.com/wp-content/uploads/2019/04/DSC00452b-1140x640.jpg'
    ),
    new Recipe(
      'A Test 2',
      'This is a test.',
      'https://savorthebest.com/wp-content/uploads/2018/07/smoked-salmon-Philadelphia-roll-_2218.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}