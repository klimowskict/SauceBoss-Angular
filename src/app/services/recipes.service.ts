import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RECIPEItems } from '../shared/RECIPEItems';

@Injectable()
export class RecipeService {

  constructor() { }

  returnRecipes(): Recipe[] {
    return RECIPEItems;
  }

  returnRecipe(id: number): Recipe {
    return RECIPEItems.filter((recipe) => (recipe.id === id))[0];
  }
         }
