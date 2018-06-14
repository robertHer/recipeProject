import { Component, OnInit ,Output, EventEmmiter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[]=[{
    name:"A new recipe",
    description:"test recipe",
    imagePath: 'http://assets.kraftfoods.com/recipe_images/opendeploy/56799_640x428.jpg'
  },
  new Recipe('a test recipe', 'this text', 'http://assets.kraftfoods.com/recipe_images/opendeploy/56799_640x428.jpg')
];
  selectedRecipe:Recipe;
   @Output() recipeisSelected:string = new EventEmmiter <Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeisSelected.emit(recipe);
  }
}
