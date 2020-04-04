import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list/site-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SiteListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
