"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./View/Home/home.component");
var heroes_component_1 = require("./View/Hero/heroes.component");
var hero_detail_component_1 = require("./View/Hero/hero-detail.component");
var web_pages_component_1 = require("./View/WebPage/web-pages.component");
var user_form_component_1 = require("./View/Users/user-form/user-form.component");
var users_component_1 = require("./View/Users/users.component");
var surfing_component_1 = require("./View/Surfing/surfing.component");
var web_page_component_1 = require("./View/WebPage/web-page.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, children: [] },
    { path: 'heroes', component: heroes_component_1.HeroesComponent, children: [
            { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }
        ] },
    { path: 'pages', component: web_pages_component_1.WebPagesComponent },
    { path: 'page', component: web_page_component_1.WebPageComponent },
    { path: 'pages/:id', component: web_page_component_1.WebPageComponent },
    // { path: 'search', component: WebPageSearchComponent},
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'users/new', component: user_form_component_1.UserFormComponent },
    { path: 'users/:id', component: user_form_component_1.UserFormComponent },
    { path: 'surfing', component: surfing_component_1.SurfingComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map