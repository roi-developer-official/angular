import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediens:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tometoes', 10)
  ];

  addIngredient(ingredient:Ingredient){
    this.ingrediens.push(ingredient)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
