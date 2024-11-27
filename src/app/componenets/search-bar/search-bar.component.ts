import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], //import before use
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  search = model<string>('Initial')

  searchButtonClicked = output ({alias: 'submit'})
//submit = alias to call in html app
  searchClick(){
    this.searchButtonClicked.emit()
  }
  updateSearch(value: string) { //diff between String and string ??
  this.search.set(value);
  }
}
