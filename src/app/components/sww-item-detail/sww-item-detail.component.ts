import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Item } from "../../dtos/item";

export interface itemAttribute {
  name: string
  value: string
}

export interface ItemDetailModel {
  itemType:string
  itemTitle:string
  itemData:itemAttribute[]
  itemCustonContent:string
}

@Component({
  selector: 'app-sww-item-detail',
  templateUrl: './sww-item-detail.component.html',
  styleUrls: ['./sww-item-detail.component.css']
})

export class SwwItemDetailComponent extends DialogComponent<ItemDetailModel, boolean> implements ItemDetailModel {
  itemType:string
  itemTitle:string
  itemData:itemAttribute[]
  itemCustonContent:string

  defaultImgSrc: string = '../../../assets/noImage.jpg'

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}
