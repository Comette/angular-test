import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwMenuComponent } from './sww-menu.component';

describe('SwwMenuComponent', () => {
  let component: SwwMenuComponent;
  let fixture: ComponentFixture<SwwMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
