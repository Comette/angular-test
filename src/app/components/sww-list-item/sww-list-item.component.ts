import { Component, Input } from '@angular/core';
import { Item } from '../../dtos/item';
import { Attribute } from '../../dtos/attribute';

import * as _ from "lodash"

@Component({
  selector: 'app-sww-list-item',
  templateUrl: './sww-list-item.component.html',
  styleUrls: ['./sww-list-item.component.css']
})
export class SwwListItemComponent {

  @Input()
  item: Item;

  defaultImgSrc: string = '../../../assets/noImage.jpg'

  constructor() { }
}
