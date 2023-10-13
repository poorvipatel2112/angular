import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe' , 'this  is simple a test', 'assets/wallpaper.jpg', [
            new Ingredient('Meat' , 1),
            new Ingredient('French fries', 20)
        ]),
        new Recipe('A second test recipe' , 'this is simple a test', 'assets/wallpaper.jpg', [
            new Ingredient('Buns' , 2),
            new Ingredient('Meat' , 3)
        ])
    ];

    constructor(private slService: ShoppingListService){
    }

    getRecipe(){
        return this.recipes.slice();
    }

    getRecipes(index:number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}