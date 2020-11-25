import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput : ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput : ElementRef;
  ingredient:Ingredient;
  @Output() ingredintAdded = new EventEmitter<Ingredient>()

  addIngredient(){
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.ingredintAdded.emit(this.ingredient)
  }

  constructor() { }
  ngOnInit(): void {}

}
