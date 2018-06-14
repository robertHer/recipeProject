import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() recipe:Recipe; 
  constructor() { }

  ngOnInit() {
  }

}
