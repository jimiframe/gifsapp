import { Component } from '@angular/core';
import {Card} from "../../interfaces/card.interface";


@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  public cardList: Card[] = [{
    title: 'Title Card',
    url: 'https://files.cdn.thinkific.com/profiles/102/451/7231705324963.medium.jpeg',
  }]

}
