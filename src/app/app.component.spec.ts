import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SwwHeaderComponent } from './components/sww-header/sww-header.component';
import { SwwMenuComponent } from './components/sww-menu/sww-menu.component';
import { SwwListComponent } from './components/sww-list/sww-list.component';
import { SwwListItemComponent } from './components/sww-list-item/sww-list-item.component';
import { NgProgressModule } from 'ngx-progressbar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SwwHeaderComponent,
        SwwMenuComponent,
        SwwListComponent,
        SwwListItemComponent
      ],
      imports: [NgProgressModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
