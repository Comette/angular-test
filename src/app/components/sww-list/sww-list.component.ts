import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";

import { SwwItemDetailComponent } from '../../components/sww-item-detail/sww-item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { People } from '../../models/people';
import { Film } from '../../models/film';
import { Item } from '../../dtos/item';

import * as _ from "lodash"
import { Constants } from "../../constants"

@Component({
  selector: 'app-sww-list',
  templateUrl: './sww-list.component.html',
  styleUrls: ['./sww-list.component.css'],
  providers: [SwapiService]
})
export class SwwListComponent implements OnInit {

  itens: Item[] = []
  nextPage: string
  previousPage: string

  @Input()
  listType: string = Constants.FILM;

  constructor(private swapiService: SwapiService, private dialogService:DialogService) { }

  ngOnInit() {
    if (this.listType === Constants.PEOPLE) {
      this.swapiService.getPeople()
        .subscribe( (data) => {
          this.nextPage = data.next
          this.previousPage = data.previous
          const peopleList = data.results.map(people => new People(people))
          this.itens = peopleList.map((people) => new Item(people))
        });
    } else if (this.listType === Constants.FILM) {
      this.swapiService.getFilms()
        .subscribe( (data) => {
          this.nextPage = data.next
          this.previousPage = data.previous
          const filmList = data.results.map(film => new Film(film))
          this.itens = filmList.map((film) => new Item(film))
        });
    }
  }

  detail(item: Item) {
    let itemData = _.filter(item.fullDetails, (attribute) => attribute.name !== 'url')
    let itemCustonContent = undefined
    if (item.type === Constants.FILM) {
      itemCustonContent = _.find(item.fullDetails, (attribute) => attribute.name === 'opening_crawl').value
      itemData = _.filter(itemData, (attribute) => attribute.name !== 'opening_crawl')
    }

    const itemDetailDto = {itemType: item.type, itemTitle:item.title, itemData: itemData, itemCustonContent: itemCustonContent}
    const itemDetailOptions = { backdropColor: 'rgba(0, 0, 0, 0.6)' }
    const disposable = this.dialogService.addDialog(SwwItemDetailComponent, itemDetailDto, itemDetailOptions).subscribe()
  }

  next() {
    this.getPaged(this.nextPage)
  }

  previous() {
    this.getPaged(this.previousPage)
  }

  getPaged(url: string) {
    this.swapiService.getPaged(url)
      .subscribe( (data) => {
            this.nextPage = data.next
            this.previousPage = data.previous
            if (this.listType === Constants.PEOPLE) {
              const peopleList = data.results.map(people => new People(people))
              this.itens = peopleList.map((people) => new Item(people))
            } else if (this.listType === Constants.FILM) {
              const filmList = data.results.map(film => new Film(film))
              this.itens = filmList.map((film) => new Item(film))
            }
          });
  }
}
