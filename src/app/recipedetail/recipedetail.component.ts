import { RecipeService } from '../services/recipes.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  item: Recipe;

  constructor(private recipeservice: RecipeService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('id-');
    console.log(id);
    this.item = this.recipeservice.returnRecipe(id);
  }

  goBack(): void {
    this.location.back();
  }

  ReviewCount(count: number) {
    return new Array(count);
  }

}
