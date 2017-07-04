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
/**
 * Created by vincent on 17-6-15.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WebPageService = (function () {
    function WebPageService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        this.HOST = "http://localhost:8182/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = this.HOST + 'api';
    }
    WebPageService.prototype.seeds = function () {
        return this.http.get(this.baseUrl + "/seeds")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.metrics = function () {
        return this.http.get(this.baseUrl + "/metrics")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.get = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (page) { return console.log(page); })
            .catch(this.handleError);
    };
    WebPageService.prototype.links = function (pageUrl, args) {
        return this.http.get(this.baseUrl + "/pages/links?args=" + args + "&url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.fields = function (pageUrl, args) {
        return this.http.get(this.baseUrl + "/pages/fields?args=" + args + "&url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.entities = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/entities?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.representation = function (pageUrl, args) {
        return this.http.get(this.baseUrl + "/pages/representation?args=" + args + "&url=" + pageUrl)
            .toPromise()
            .catch(this.handleError);
    };
    WebPageService.prototype.fetch = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/fetch?url=" + pageUrl)
            .toPromise()
            .catch(this.handleError);
    };
    WebPageService.prototype.parse = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/parse?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.index = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/index?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.delete = function (pageUrl) {
        return this.jsonp.delete(this.baseUrl + "/pages/delete?id=" + pageUrl, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    WebPageService.prototype.getFieldsOfOutPages = function (pageUrl, args) {
        return this.http.get(this.baseUrl + "/pages/outgoing/fields?args=" + args + "&url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.getEntityFieldsOfOutPages = function (pageUrl, args) {
        return this.http.get(this.baseUrl + "/pages/outgoing/entities?args=" + args + "&url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.fetchOutPages = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/outgoing/fetch?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.parseOutPages = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/outgoing/parse?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.indexOutPages = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/outgoing/index?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.updateByOutPages = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/update-by-out-pages?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.inject = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/inject?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.injectOutPages = function (pageUrl, linkFilter) {
        return this.http.get(this.baseUrl + "/pages/outgoing/inject?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.unInject = function (pageUrl) {
        return this.http.get(this.baseUrl + "/pages/outgoing/uninject?url=" + pageUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WebPageService.prototype.unInjectOutPages = function (pageUrl) {
    };
    WebPageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return WebPageService;
}());
WebPageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        http_1.Jsonp])
], WebPageService);
exports.WebPageService = WebPageService;
//# sourceMappingURL=web-page.service.js.map