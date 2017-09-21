import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Constants } from "../../constants"

@Component({
  selector: 'app-sww-menu',
  templateUrl: './sww-menu.component.html',
  styleUrls: ['./sww-menu.component.css']
})
export class SwwMenuComponent implements OnInit{

  isFilmSelected: boolean
  isPeopleSelected: boolean

  @Output()
  onSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectFilm()
  }

  select(selection: string) {
    this.onSelect.emit(selection)
  }

  selectFilm() {
    this.isFilmSelected = true
    this.isPeopleSelected = false
    this.select(Constants.FILM)
  }

  selectPeople(){
    this.isPeopleSelected = true
    this.isFilmSelected = false
    this.select(Constants.PEOPLE)
  }

}
