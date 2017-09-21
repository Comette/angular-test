import { Component } from '@angular/core';
import { Constants } from "./constants"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  selectedMenu: string = ''
  showList: boolean

  constructor() {}

  menuSelection(selectedItem: string) {
    this.showList = false
    this.selectedMenu = selectedItem
    setTimeout(() => this.showList = true, 0)
  }
}
