import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './View/Home/home.component';
import { HeroesComponent } from './View/Hero/heroes.component';
import { HeroDetailComponent } from './View/Hero/hero-detail.component';
import { HeroService } from './Service/hero.service';
import { HeroSearchComponent } from './View/Hero/hero-search.component';
import {WebPagesComponent} from './View/WebPage/web-pages.component';
import {WebPageService} from './Service/web-page.service';
import {UserFormComponent} from './View/Users/user-form/user-form.component';
import {UsersComponent} from './View/Users/users.component';
import {UsersService} from './View/Users/users.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Service/mock/in-memory-data.service';
import { SurfingComponent} from "./View/Surfing/surfing.component";
import {WebPageComponent} from "./View/WebPage/web-page.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SurfingComponent,
    HomeComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    WebPageComponent,
    WebPagesComponent,
    UsersComponent,
    UserFormComponent
  ],
  providers: [
    HeroService,
    WebPageService,
    UsersService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
