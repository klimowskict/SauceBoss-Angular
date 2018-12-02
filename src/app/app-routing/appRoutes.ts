import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactUsComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { DealsComponent } from '../deals/deals.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipedetailComponent } from '../recipedetail/recipedetail.component';
import { TermsComponent } from '../terms/terms.component';
import { CareersComponent } from '../careers/careers.component';
import { SearchComponent } from '../search/search.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'deals',     component: DealsComponent },
  { path: 'aboutus',     component: AboutusComponent },
  { path: 'contactus',     component: ContactUsComponent },
  { path: 'itemdetail/:id', component: ItemdetailComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipedetail/:id', component: RecipedetailComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
