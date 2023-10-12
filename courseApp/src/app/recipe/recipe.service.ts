import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe' , 'this  is simple a test', 'assets/wallpaper.jpg'),
        new Recipe('A second test recipe' , 'this is simple a test', 'assets/wallpaper.jpg')
      ];

    getRecipe(){
        return this.recipes.slice();
    }
}