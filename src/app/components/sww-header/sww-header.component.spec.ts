import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwwHeaderComponent } from './sww-header.component';

describe('SwwHeaderComponent', () => {
  let component: SwwHeaderComponent;
  let fixture: ComponentFixture<SwwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwwHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
