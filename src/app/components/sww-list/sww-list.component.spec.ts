import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwListComponent } from './sww-list.component';

describe('SwwListComponent', () => {
  let component: SwwListComponent;
  let fixture: ComponentFixture<SwwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
