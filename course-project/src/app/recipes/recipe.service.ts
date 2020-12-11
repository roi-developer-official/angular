import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService:ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' ,[new Ingredient('Meat',1),new Ingredient('Salad', 2)])
      ];

      getRecipes(){
          return this.recipes.slice(); // this will return a copy of the array
      }
      
      getRecipe(index:number){
          return this.recipes[index]
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
            this.slService.addIngredients(ingredients);
      }

}