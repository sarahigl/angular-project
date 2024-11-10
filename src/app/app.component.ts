import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RecipeVisualComponent } from './componenets/recipe-visual/recipe-visual.component';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeVisualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  recipe1! : Recipe;
  constructor(){
    this.recipe1 = new Recipe();
    this.recipe1.name = "Ramen";
    this.recipe1.tempP = 55;
    this.recipe1.nameCountry = 'Japon'
    this.recipe1.tempC = 25;
    this.recipe1.figcaption = "N°001"
  }
}
