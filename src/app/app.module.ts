import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpModule, BrowserXhr } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { SwwHeaderComponent } from './components/sww-header/sww-header.component';
import { SwwMenuComponent } from './components/sww-menu/sww-menu.component';
import { SwwListItemComponent } from './components/sww-list-item/sww-list-item.component';
import { SwwListComponent } from './components/sww-list/sww-list.component';
import { SwwItemDetailComponent } from './components/sww-item-detail/sww-item-detail.component';
import { SwapiService } from './services/swapi.service';

@NgModule({
  declarations: [
    AppComponent,
    SwwHeaderComponent,
    SwwMenuComponent,
    SwwListItemComponent,
    SwwListComponent,
    SwwItemDetailComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    HttpModule,
    NgProgressModule
  ],
  entryComponents: [
    SwwItemDetailComponent
  ],
  providers: [
    SwapiService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
