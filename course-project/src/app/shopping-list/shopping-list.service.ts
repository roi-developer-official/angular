import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';



export class ShoppingListService{
    ingredientsChange = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tometoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
  

      addIngredient(ingredient:Ingredient){
          this.ingredientsChange.emit(this.ingredients.slice());
          this.ingredients.push(ingredient);
      }

      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChange.emit(this.ingredients.slice())
      }


}