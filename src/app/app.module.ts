import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteListComponent } from './site-list/site-list.component';
import { TopComponent } from './top/top.component';
import { SiteComponent } from './site/site.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SiteListComponent },
    ])
  ],

  declarations: [ 
    AppComponent, 
    SiteListComponent, 
    TopComponent, SiteComponent 
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
