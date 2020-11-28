import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput : ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput : ElementRef;
  ingredient:Ingredient;

  addIngredient(){
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.slService.addIngredient(this.ingredient);
  }

  
  constructor(private slService:ShoppingListService) { }
  ngOnInit(): void {}

}
