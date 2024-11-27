import { Recipe } from './../../models/recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-visual',
  standalone: true,
  imports: [],
  templateUrl: './recipe-visual.component.html',
  styleUrl: './recipe-visual.component.css'
})
export class RecipeVisualComponent {
  @Input({
    alias : 'myRecipe',
    required : true
  }) 
  recipe : Recipe = new Recipe();
}
