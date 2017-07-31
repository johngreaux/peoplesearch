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
var people_service_1 = require("./people.service");
var add_person_component_1 = require("./add-person/add-person.component");
var delete_person_component_1 = require("./delete-person/delete-person.component");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var PeopleComponent = (function () {
    function PeopleComponent(peopleService, modal) {
        this.peopleService = peopleService;
        this.modal = modal;
        this.people = [];
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.p = 1;
        this.busy = this.peopleService.getPeople()
            .then(function (data) {
            _this.people = data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    // Open the bootstrap modal with the add person form.
    // Wait for promise complete on successful form submit and refresh the people table
    PeopleComponent.prototype.addPersonModal = function () {
        var _this = this;
        var modal = this.modal.open(add_person_component_1.AddPersonComponent, angular2_modal_1.overlayConfigFactory({}, bootstrap_1.BSModalContext));
        modal.then(function (resultPromise) {
            resultPromise.result.then(function (result) {
                _this.busy = _this.peopleService.getPeople()
                    .then(function (data) {
                    _this.people = data;
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }, function () { });
        });
    };
    // Open the bootstrap modal with the delete person form.
    // Wait for promise complete on successful form submit and refresh the people table
    PeopleComponent.prototype.deletePersonModal = function (id) {
        var _this = this;
        var modal = this.modal.open(delete_person_component_1.DeletePersonComponent, angular2_modal_1.overlayConfigFactory({ id: id }, bootstrap_1.BSModalContext));
        // this.busy is used to display the loading overlay while waiting for the people service promise to complete
        modal.then(function (resultPromise) {
            resultPromise.result.then(function (result) {
                _this.busy = _this.peopleService.getPeople()
                    .then(function (data) {
                    _this.people = data;
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }, function () { });
        });
    };
    PeopleComponent.prototype.search = function (term) {
        var _this = this;
        this.peopleService.searchPeople(term)
            .then(function (data) {
            _this.people = data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PeopleComponent = __decorate([
        core_1.Component({
            selector: 'app-people',
            templateUrl: 'app/people/people.component.html',
            styleUrls: ['app/people/people.component.css']
        }),
        __metadata("design:paramtypes", [people_service_1.PeopleService, bootstrap_1.Modal])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map