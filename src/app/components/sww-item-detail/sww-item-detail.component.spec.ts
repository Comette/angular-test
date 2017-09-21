import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwItemDetailComponent } from './sww-item-detail.component';
import { DialogService } from "ng2-bootstrap-modal";

describe('SwwItemDetailComponent', () => {
  let component: SwwItemDetailComponent;
  let fixture: ComponentFixture<SwwItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwItemDetailComponent ],
      providers: [ DialogService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
