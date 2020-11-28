import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediens:Ingredient[];
  constructor(private shoppingListService:ShoppingListService) { }

  

  ngOnInit(): void {
    this.ingrediens = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChange.subscribe((ingrediens:Ingredient[])=>{
      this.ingrediens = ingrediens;
    })
  }



}
