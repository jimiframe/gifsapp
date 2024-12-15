import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
           class="form-control"
           placeholder="Buscar gifs..."
           (keyup.enter)="searchTag()"
           #txtTagInpunt
    >
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInpunt')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;
    console.log({ newTag });
  }

}
