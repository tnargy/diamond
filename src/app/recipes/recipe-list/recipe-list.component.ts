import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeSelected.emit(recipeElement);
  }

  constructor() {}

  ngOnInit() {
  }
}
