import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

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

}
