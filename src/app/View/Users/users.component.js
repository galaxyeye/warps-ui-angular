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
var users_service_1 = require("./users.service");
var UsersComponent = (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.list().then(function (users) { return _this.users = users || []; });
    };
    UsersComponent.prototype.delete = function (user) {
        if (confirm('Are you sure you want to delete ' + user.name + '?')) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this.usersService.delete(user.id);
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map