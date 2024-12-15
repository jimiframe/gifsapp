import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

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

  constructor( private gifsService: GifsService ) { }

  searchTag() {
    const newTag: string = this.tagInput.nativeElement.value;

    this.gifsService.searchTags( newTag );

    this.tagInput.nativeElement.value = '';
  }

}
