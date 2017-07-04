import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './View/Home/home.component';
import { HeroesComponent } from './View/Hero/heroes.component';
import { HeroDetailComponent } from './View/Hero/hero-detail.component';
import { WebPagesComponent } from './View/WebPage/web-pages.component';
import { UserFormComponent } from './View/Users/user-form/user-form.component';
import { UsersComponent } from './View/Users/users.component';
import { SurfingComponent } from "./View/Surfing/surfing.component";
import { WebPageComponent } from "./View/WebPage/web-page.component";
import { WebPageSearchComponent } from "./View/WebPage/web-page-search.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [

  ] },
  { path: 'heroes', component: HeroesComponent, children: [
    { path: 'detail/:id', component: HeroDetailComponent }
  ] },
  { path: 'pages', component: WebPagesComponent},
  { path: 'page', component: WebPageComponent},
  { path: 'pages/:id', component: WebPageComponent},
  // { path: 'search', component: WebPageSearchComponent},
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent},
  { path: 'surfing', component: SurfingComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
