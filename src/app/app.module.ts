import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DishService } from './services/dish.service';
import { RecipeService } from './services/recipes.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { LowerBarComponent } from './lower-bar/lower-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { DealsComponent } from './deals/deals.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { TermsComponent } from './terms/terms.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemdetailComponent,
    UpperBarComponent,
    LowerBarComponent,
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    DealsComponent,
    LoginComponent,
    RecipesComponent,
    RecipedetailComponent,
    TermsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [DishService, RecipeService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
