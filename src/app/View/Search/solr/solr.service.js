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
var SolrService = (function () {
    function SolrService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.solrUrl = 'api/pages';
    }
    SolrService.prototype.home = function () { };
    SolrService.prototype.list = function () {
        return this.http.get(this.solrUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SolrService.prototype.get = function (pageUrl) {
        var url = this.solrUrl + "?url=" + pageUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SolrService.prototype.delete = function (pageUrl) {
        var url = this.solrUrl + "/delete?url=" + pageUrl;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    SolrService.prototype.create = function (name) {
        return this.http
            .post(this.solrUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    SolrService.prototype.update = function (document) {
        var url = this.solrUrl + "/" + document.baseUrl;
        return this.http
            .put(url, JSON.stringify(document), { headers: this.headers })
            .toPromise()
            .then(function () { return document; })
            .catch(this.handleError);
    };
    SolrService.prototype.query = function () { };
    SolrService.prototype.crawlIn24h = function () { };
    SolrService.prototype.crawlIn48h = function () { };
    SolrService.prototype.crawlToday = function () { };
    SolrService.prototype.crawlYesterday = function () { };
    SolrService.prototype.publishToday = function () { };
    SolrService.prototype.publishYesterday = function () { };
    SolrService.prototype.publishIn24h = function () { };
    SolrService.prototype.publishIn48h = function () { };
    SolrService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SolrService;
}());
SolrService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SolrService);
exports.SolrService = SolrService;
//# sourceMappingURL=solr.service.js.map