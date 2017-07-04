"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./View/Home/home.component");
var heroes_component_1 = require("./View/Hero/heroes.component");
var hero_detail_component_1 = require("./View/Hero/hero-detail.component");
var hero_service_1 = require("./Service/hero.service");
var hero_search_component_1 = require("./View/Hero/hero-search.component");
var web_pages_component_1 = require("./View/WebPage/web-pages.component");
var web_page_service_1 = require("./Service/web-page.service");
var user_form_component_1 = require("./View/Users/user-form/user-form.component");
var users_component_1 = require("./View/Users/users.component");
var users_service_1 = require("./View/Users/users.service");
var surfing_component_1 = require("./View/Surfing/surfing.component");
var web_page_component_1 = require("./View/WebPage/web-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            surfing_component_1.SurfingComponent,
            home_component_1.HomeComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            hero_search_component_1.HeroSearchComponent,
            web_page_component_1.WebPageComponent,
            web_pages_component_1.WebPagesComponent,
            users_component_1.UsersComponent,
            user_form_component_1.UserFormComponent
        ],
        providers: [
            hero_service_1.HeroService,
            web_page_service_1.WebPageService,
            users_service_1.UsersService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map