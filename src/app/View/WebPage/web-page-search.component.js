"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var web_page_search_service_1 = require("../../Service/web-page-search.service");
var WebPageSearchComponent = (function () {
    function WebPageSearchComponent(pageSearchService, router) {
        this.pageSearchService = pageSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    WebPageSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    WebPageSearchComponent.prototype.ngOnInit = function () {
        // this.pages = this.searchTerms
        //   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        //   .distinctUntilChanged()   // ignore if next search term is same as previous
        //   .switchMap(term => term   // switch to new observable each time the term changes
        //     // return the http search observable
        //     ? this.pageSearchService.search(term)
        //     // or the observable of empty webPages if there was no search term
        //     : Observable.of<WebPage[]>([]))
        //   .catch(error => {
        //     // TODO: add real error handling
        //     console.log(error);
        //     return Observable.of<WebPage[]>([]);
        //   });
    };
    WebPageSearchComponent.prototype.gotoDetail = function (page) {
        var link = ['/detail', page.baseUrl];
        this.router.navigate(link);
    };
    return WebPageSearchComponent;
}());
WebPageSearchComponent = __decorate([
    core_1.Component({
        selector: 'app-web-page-search',
        templateUrl: './web-page-search.component.html',
        styleUrls: ['./web-page-search.component.css'],
        providers: [web_page_search_service_1.WebPageSearchService]
    }),
    __metadata("design:paramtypes", [web_page_search_service_1.WebPageSearchService,
        router_1.Router])
], WebPageSearchComponent);
exports.WebPageSearchComponent = WebPageSearchComponent;
//# sourceMappingURL=web-page-search.component.js.map