import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoverComponent} from './components/cover/cover.component';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {ListUsersComponent} from './components/listUsers/listUsers.component';
import {UserAmaliaComponent} from './components/userAmalia/userAmalia.component';
import {IndicatorsAmaliaComponent} from './components/indicatorsAmalia/indicatorsAmalia.component';
import {GraphicsAmaliaComponent} from './components/graphicsAmalia/graphicsAmalia.component';
import {EndComponent} from './components/end/end.component';

const routes: Routes = [{path: '', redirectTo: '/cover', pathMatch: 'full'},
  {path: 'cover', component: CoverComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'listUsers', component: ListUsersComponent},
  {path: 'userAmalia', component: UserAmaliaComponent},
  {path: 'indicatorsAmalia', component: IndicatorsAmaliaComponent},
  {path: 'graphicsAmalia', component: GraphicsAmaliaComponent},
  {path: 'end', component: EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
