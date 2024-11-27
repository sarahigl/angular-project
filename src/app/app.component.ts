import { Component, computed, model } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RecipeVisualComponent } from './componenets/recipe-visual/recipe-visual.component';
import { Recipe } from './models/recipe.model';
import { SearchBarComponent } from "./componenets/search-bar/search-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RecipeVisualComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  recipes!: Recipe[];
  search = model ('');

  filteredRecipes = computed(() => {
    return this.recipes.filter(recipe => recipe.nameCountry.includes(this.search()));
  })

  constructor(){
   this.recipes = [];

   const recipe1 = new Recipe();
   recipe1.name = "Ramen";
   recipe1.nameCountry = 'Japon';
   recipe1.picture = 'japRamen.jpg';
   recipe1.icon = 'japan.png';
   recipe1.note = 9;
   recipe1.description = ' Un bol réconfortant de nouilles servi dans un bouillon riche, accompagné de garnitures comme des œufs marinés';
   this.recipes.push(recipe1);

   const recipe2 = new Recipe();
   recipe2.name = "Teokbokki";
   recipe2.nameCountry = 'Korea';
   recipe2.picture = 'teokbokki.jpg';
   recipe2.icon = 'korea.jpg';
   recipe2.note = 10;
   recipe2.description =' Un plat coréen épicé à base de gâteaux de riz moelleux et de sauce gochujang savoureuse.';
   this.recipes.push(recipe2);

   const recipe3 = new Recipe();
   recipe3.name = "Egg mayo";
   recipe3.nameCountry = 'Korea';
   recipe3.picture = 'eggmayo.jpg';
   recipe3.icon ='korea.jpg';
   recipe3.note = 7;
   recipe3.description = `Un sandwich ultra-moelleux garni d'une crème d'œufs durs et de mayonnaise douce typiquement japonaise.`;
   this.recipes.push(recipe3)

   const recipe4 = new Recipe();
   recipe4.name = "Pizza napolitaine";
   recipe4.nameCountry = 'Italia';
   recipe4.picture = 'napoletana.jpg';
   recipe4.icon = 'italia.jpg';
   recipe4.note = 10;
   recipe4.description = 'Une pizza italienne authentique, fine et moelleuse, cuite au feu de bois avec des ingrédients simples comme la tomate et la mozzarella di bufala.';
   this.recipes.push(recipe4)
  }
}
