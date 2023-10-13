import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple' , 5),
        new Ingredient('banana' , 10),
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[] ){
        for (let ingredient of ingredients)
        {
            this.ingredients.push(ingredient);
        }
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}