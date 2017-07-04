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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var web_page_service_1 = require("../../Service/web-page.service");
var WebPageComponent = (function () {
    function WebPageComponent(pageService, router, route, location) {
        this.pageService = pageService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    WebPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.targetUrl = params['url'];
            _this.args = params['args'];
            _this.pageService.fields(_this.targetUrl, _this.args)
                .then(function (page) {
                _this.page = page;
            }, function (response) {
                if (response.status === 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    WebPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    WebPageComponent.prototype.fetch = function (pageUrl) {
        var _this = this;
        this.pageService.fetch(this.targetUrl).then(function (content) { return _this.pageHtml = content; });
    };
    WebPageComponent.prototype.parse = function (pageUrl) {
        var _this = this;
        this.pageService.parse(this.targetUrl).then(function (page) {
            _this.page = page;
            _this.indexDocument = null;
        });
    };
    WebPageComponent.prototype.index = function (pageUrl) {
        var _this = this;
        this.pageService.index(this.targetUrl).then(function (indexDocument) {
            _this.page = null;
            _this.indexDocument = indexDocument;
        });
    };
    WebPageComponent.prototype.fetchOutPages = function (pageUrl) {
        var _this = this;
        this.pageService.fetchOutPages(this.targetUrl).then(function (outgoingPages) {
            _this.outgoingPages = outgoingPages;
            _this.indexDocument = null;
        });
    };
    WebPageComponent.prototype.parseOutPages = function (pageUrl) {
        var _this = this;
        this.pageService.parseOutPages(this.targetUrl).then(function (outgoingPages) {
            _this.outgoingPages = outgoingPages;
            _this.indexDocument = null;
        });
    };
    WebPageComponent.prototype.indexOutPages = function (pageUrl) {
        var _this = this;
        this.pageService.indexOutPages(this.targetUrl).then(function (outgoingIndexDocument) {
            _this.page = null;
            _this.outgoingIndexDocument = outgoingIndexDocument;
        });
    };
    return WebPageComponent;
}());
WebPageComponent = __decorate([
    core_1.Component({
        selector: 'app-web-page',
        templateUrl: './web-page.component.html',
        styleUrls: ['./web-page-component.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [web_page_service_1.WebPageService,
        router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location])
], WebPageComponent);
exports.WebPageComponent = WebPageComponent;
//# sourceMappingURL=web-page.component.js.map