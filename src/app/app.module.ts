import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Page01Component} from './components/page01/page01.component';
import {Page02Component} from './components/page02/page02.component';
import {FormsModule} from '@angular/forms';
import { Page03Component } from './components/page03/page03.component';
import { Page04Component } from './components/page04/page04.component';
import { Page05Component } from './components/page05/page05.component';
import { Page06Component } from './components/page06/page06.component';
import { Page07Component } from './components/page07/page07.component';

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component,
    Page03Component,
    Page04Component,
    Page05Component,
    Page06Component,
    Page07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
