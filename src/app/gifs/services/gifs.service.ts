import {Injectable} from '@angular/core';

@Injectable({  providedIn: 'root'} )
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTags(tag: string): void {
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );

  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter(t => t.toLowerCase() !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }
}
