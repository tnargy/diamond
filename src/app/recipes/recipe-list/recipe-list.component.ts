import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
       recipes: Recipe[] = [
       		new Recipe(
            'A Test', 
            'This is a test.', 
            'https://www.japanesecooking101.com/wp-content/uploads/2019/04/DSC00452b-1140x640.jpg'
          )
       ];

       constructor() {}

       ngOnInit() {
       }
}
