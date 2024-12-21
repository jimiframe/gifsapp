import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({  providedIn: 'root'} )
export class GifsService {

  private gifList: Gif[] = []

  private _tagsHistory: string[] = [];
  private apiKey: string = 'FjJcOxRPgmPE7bbxJBFnfFj8f6WWP5pd';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTags(tag: string): void {
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( resp  => {
        this.gifList = resp.data;
      })

  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter(t => t.toLowerCase() !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.safeLocalStorage('tagsHistory', this._tagsHistory);
  }

  private safeLocalStorage(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }

  private loadLocalStorage(): void {
    if ( !localStorage.getItem('tagsHistory') ) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('tagsHistory')! );
    this.searchTags(this._tagsHistory[0] || 'cat');
  }

  get gifs(): Gif[] {
    return [...this.gifList];
  }
}
