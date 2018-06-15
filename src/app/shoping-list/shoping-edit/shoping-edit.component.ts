import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild ('nameInput') nameInputRed: ElementRef;
  @ViewChild ('amountInput') amountInputRed : ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(){
    const newIngredient = new Ingredient(
      this.nameInputRed.nativeElement.value,
      this.amountInputRed.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient)
  }
}
