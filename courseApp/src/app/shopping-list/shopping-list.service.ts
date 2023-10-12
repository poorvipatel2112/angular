import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple' , 5),
        new Ingredient('banana' , 10),
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient ){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}