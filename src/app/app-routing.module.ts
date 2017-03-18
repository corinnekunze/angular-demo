import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicComponent }   from './topics/topic.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics', component: TopicComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}