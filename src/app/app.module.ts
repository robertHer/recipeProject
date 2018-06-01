import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';


import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListItemsComponent } from './recipes/recipe-list/recipe-list-items/recipe-list-items.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';


import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    HeaderComponent,
    RecipeListItemsComponent,
    RecipeDetailsComponent,
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
