import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopipng-list.service';
import { Recipe } from './recipe.model';

// we are using injectable to inject (shoppinglist) service into a service
@Injectable()
export class RecipeService {

   private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

      getRecipes() {
          // slice will return new array which is exact copy of the one in this service file
          // we need slice because this is reference type, so if we change something here, it will
          // be changed in the servica, lekcija 118
          return this.recipes.slice();
      }

      getRecipe(index: number){
         return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
      }
}




