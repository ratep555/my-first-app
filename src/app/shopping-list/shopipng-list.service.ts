import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    // ovo moramo da nam pokazuje novi item zbog slice
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
           this.ingredients.push(ingredient);
           // ovo je zato što nam slice prosljeđuje samo kopiju, lekcija 121
           // inače nam ne bi pokazivao novi dodani item
           this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
          // ... is spread operator which allows us to turn array of elements into a list of elements
      this.ingredients.push(...ingredients);
      // now we have to use next to emit new value
      // our ingredients changed so we are passing a copy of it
      this.ingredientChanged.next(this.ingredients.slice());
      }

      }


