import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwListItemComponent } from './sww-list-item.component';

describe('SwwListItemComponent', () => {
  let component: SwwListItemComponent;
  let fixture: ComponentFixture<SwwListItemComponent>;
  let expectedItem

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwListItemComponent);
    component = fixture.componentInstance;
    expectedItem = {}
    component.item = expectedItem
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
