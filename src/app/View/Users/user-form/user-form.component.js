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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var users_service_1 = require("../users.service");
var basic_validators_1 = require("../../Elements/basic-validators");
var UserFormComponent = (function () {
    function UserFormComponent(formBuilder, router, route, usersService) {
        this.router = router;
        this.route = route;
        this.usersService = usersService;
        this.user = new user_1.User();
        this.userForm = formBuilder.group({
            name: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)
                ]],
            email: ['', [
                    forms_1.Validators.required,
                    basic_validators_1.BasicValidators.email
                ]],
            phone: [],
            address: formBuilder.group({
                street: ['', forms_1.Validators.minLength(3)],
                suite: [],
                city: ['', forms_1.Validators.maxLength(30)],
                zipcode: ['', forms_1.Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
            })
        });
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Edit User' : 'New User';
            if (!id) {
                return;
            }
            _this.usersService.get(id)
                .then(function (user) { return _this.user = user; }, function (response) {
                if (response.status === 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    UserFormComponent.prototype.save = function () {
        var _this = this;
        var result;
        var user = this.userForm.value;
        if (user.id) {
            result = this.usersService.update(user);
        }
        else {
            result = this.usersService.add(user);
        }
        result.then(function (data) { return _this.router.navigate(['users']); });
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        users_service_1.UsersService])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map