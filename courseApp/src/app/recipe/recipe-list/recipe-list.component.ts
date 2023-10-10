import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe' , 'this  is simple a test', 'https://www.simplyrecipes.com/recipes/the_finger_test_to_check_the_doneness_of_meat/'),
    new Recipe('A second test recipe' , 'this is simple a test', 'https://www.simplyrecipes.com/recipes/the_finger_test_to_check_the_doneness_of_meat/')
  ];
}
