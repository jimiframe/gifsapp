import {Injectable} from '@angular/core';

@Injectable({  providedIn: 'root'} )
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTags(tag: string): void {
    this._tagsHistory.unshift( tag );

    console.log(this.tagsHistory);
  }
}
