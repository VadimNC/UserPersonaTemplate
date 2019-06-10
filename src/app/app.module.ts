import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoverComponent} from './components/cover/cover.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {FormsModule} from '@angular/forms';
import {ListUsersComponent} from './components/listUsers/listUsers.component';
import {UserAmaliaComponent} from './components/userAmalia/userAmalia.component';
import {IndicatorsAmaliaComponent} from './components/indicatorsAmalia/indicatorsAmalia.component';
import {GraphicsAmaliaComponent} from './components/graphicsAmalia/graphicsAmalia.component';
import {EndComponent} from './components/end/end.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    IntroductionComponent,
    ListUsersComponent,
    UserAmaliaComponent,
    IndicatorsAmaliaComponent,
    GraphicsAmaliaComponent,
    EndComponent,
    LoginComponent
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
