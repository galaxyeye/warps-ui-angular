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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
var UsersService = (function () {
    function UsersService(jsonp) {
        this.jsonp = jsonp;
        this.url = 'http://jsonplaceholder.typicode.com/users';
    }
    UsersService.prototype.list = function () {
        return this.jsonp.request(this.url + "?callback=JSONP_CALLBACK")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.get = function (id) {
        var url = this.url + "/" + id;
        return this.jsonp.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.add = function (user) {
        return this.jsonp.post(this.url, JSON.stringify(user))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.update = function (user) {
        var url = this.url + "/" + user.id;
        return this.jsonp.put(url, JSON.stringify(user))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.jsonp.delete(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map