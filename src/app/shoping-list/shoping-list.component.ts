import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredient: Ingredient[] = [{
    names :'apples',
    amount: 5
  },
    new Ingredient ('Tomatoes', 5)
  ];
  constructor() { }

  ngOnInit() {

  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredient.push(ingredient);
  }

}
