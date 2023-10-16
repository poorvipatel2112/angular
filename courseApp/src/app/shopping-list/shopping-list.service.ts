import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing =  new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple' , 5),
        new Ingredient('banana' , 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
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

    updateIngredient(index: number , newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngreient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}