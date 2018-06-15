import { Component, OnInit, Input, Output, EventEmmiter } from '@angular/core';

@Component({
  selector: 'recipe-list-items',
  templateUrl: './recipe-list-items.component.html',
  styleUrls: ['./recipe-list-items.component.css']
})
export class RecipeListItemsComponent implements OnInit {
  @Input() recipe:Recipe;  
  @Output() recipeWasSelected:string = new EventEmmiter <Recipe>();

  constructor() {}

  ngOnInit() {
  }

  selectRecipe(){

  }

}
