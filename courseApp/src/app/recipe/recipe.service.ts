import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

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

    setRecipes(recipes : Recipe[]){
         this.recipes = recipes;
         this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }

}