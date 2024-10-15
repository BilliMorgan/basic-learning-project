import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'Tasty Schnitzel',
      'Super testy schnitzel - just awesome',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      '2',
      'Big Fat Burger',
      'The biggest, the fattiest ',
      'https://media.gettyimages.com/id/1174648824/photo/big-cheese-burger-with-fries.jpg?s=1024x1024&w=gi&k=20&c=mKIGyTtt1r67kb5C5_VbPIgr-NzTagiPESW-5VlalSQ=',
      [new Ingredient('Bread', 2), new Ingredient('Meat', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string) {
    const recipe = this.recipes.find((res) => {
      return res.id === id;
    });
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
