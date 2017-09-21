import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwSideMenuComponent } from './sww-side-menu.component';

describe('SwwSideMenuComponent', () => {
  let component: SwwSideMenuComponent;
  let fixture: ComponentFixture<SwwSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
