import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test 1',
      'This is a test.',
      'https://www.japanesecooking101.com/wp-content/uploads/2019/04/DSC00452b-1140x640.jpg',
      [
        new Ingredient('Bag of Rice', 1),
        new Ingredient('Egg', 5),
        new Ingredient('Seaweed', 1)
      ]
    ),
    new Recipe(
      'A Test 2',
      'This is a test.',
      'https://savorthebest.com/wp-content/uploads/2018/07/smoked-salmon-Philadelphia-roll-_2218.jpg',
      [
        new Ingredient('Bag of Rice', 1),
        new Ingredient('Fish', 3),
        new Ingredient('Avocado', 2)
      ]
    )
  ];
  
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}