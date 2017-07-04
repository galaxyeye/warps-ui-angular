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
var web_page_service_1 = require("../../Service/web-page.service");
var HomeComponent = HomeComponent_1 = (function () {
    function HomeComponent(pageService, router) {
        this.pageService = pageService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.test();
    };
    HomeComponent.prototype.test = function () {
        var input = "ld -o -a b -x y -s -w hello --version 3.14 http://war.163.com/";
        var command = HomeComponent_1.parseCmdLine(input);
        console.log(command);
        // console.log(this.router.createUrlTree(["/page"], {queryParams:{args:command.args, url: command.pageUrl}}));
    };
    HomeComponent.parseCmdLine = function (input) {
        var cmd = null;
        var args = null;
        var pageUrl = null;
        var pos = input.indexOf(" http");
        if (pos !== -1) {
            cmd = input.substring(0, pos);
            pageUrl = input.substring(pos + 1);
            args = input.split(" ");
            if (args.length > 0) {
                cmd = args[0];
                args = args.slice(1, args.length - 1);
                args = args.join(":").replace(/:-/gi, ",-");
            }
        }
        return { cmd: cmd, args: args, pageUrl: pageUrl };
    };
    HomeComponent.prototype.run = function (input) {
        var command = HomeComponent_1.parseCmdLine(input);
        var cmd = command.cmd;
        var args = command.args;
        var pageUrl = command.pageUrl;
        switch (cmd) {
            case "ld":
            case "load":
                this.router.navigate(["/page"], { queryParams: { args: args, url: pageUrl } });
                break;
            case "j":
            case "inject":
                this.router.navigate(["/page/inject"], { queryParams: { args: args, configuredUrl: pageUrl } });
                break;
            case "uj":
            case "uninject":
                this.router.navigate(["/page/uninject"], { queryParams: { args: args, url: pageUrl } });
                break;
            case "f":
            case "fetch":
                this.router.navigate(["/page/fetch"], { queryParams: { args: args, url: pageUrl } });
                break;
            case "ps":
            case "parse":
                this.router.navigate(["/page/parse"], { queryParams: { args: args, url: pageUrl } });
                break;
            case "index":
                this.router.navigate(["/page/index"], { queryParams: { args: args, url: pageUrl } });
                break;
            default:
                this.router.navigate(["/search", { queryParams: { args: args, w: input } }]);
                break;
        }
    };
    return HomeComponent;
}());
HomeComponent = HomeComponent_1 = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [web_page_service_1.WebPageService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var HomeComponent_1;
//# sourceMappingURL=home.component.js.map