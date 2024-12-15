import {Component} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
           class="form-control"
           placeholder="Buscar gifs..."
           (keyup.enter)="searchTag( txtTagInpunt.value )"
           #txtTagInpunt
    >
  `
})
export class SearchBoxComponent {
  constructor() { }

  searchTag( newTag: string ) {
    console.log({ newTag });
  }

}
