import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple' , 5),
        new Ingredient('banana' , 10),
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[] ){
        for (let ingredient of ingredients)
        {
            this.ingredients.push(ingredient);
        }
        this.ingredientChanged.next(this.ingredients.slice());
    }
}