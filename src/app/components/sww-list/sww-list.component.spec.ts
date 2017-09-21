import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwListComponent } from './sww-list.component';
import { SwwListItemComponent } from '../sww-list-item/sww-list-item.component';
import { SwapiService } from '../../services/swapi.service';
import { DialogService } from "ng2-bootstrap-modal";

describe('SwwListComponent', () => {
  let component: SwwListComponent;
  let fixture: ComponentFixture<SwwListComponent>;


  beforeEach(async(() => {
    let swapiServiceStub = { Http: {}}
    let dialogServiceStub = {}
    TestBed.configureTestingModule({
      declarations: [ SwwListComponent, SwwListItemComponent ],
      providers: [
        {provide: SwapiService, useValue: swapiServiceStub},
        {provide: DialogService, useValue: dialogServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
