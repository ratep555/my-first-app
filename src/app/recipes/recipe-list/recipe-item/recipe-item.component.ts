import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // input makes sure we get the data from outside
  // input allows us to bind this component property from outside (in this case recipelist)
@Input() recipe: Recipe;
@Input() index: number;

  ngOnInit(): void {
  }

}
