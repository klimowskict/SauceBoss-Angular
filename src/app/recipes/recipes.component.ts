import { Component, OnInit } from '@angular/core';
import { Recipe } from './../shared/recipe';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  item: Recipe;

  onSelect(recipe: Recipe) {
    this.item = recipe;
  }

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.returnRecipes();
  }

          }

