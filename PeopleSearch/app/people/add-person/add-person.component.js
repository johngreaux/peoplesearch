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
var angular2_modal_1 = require("angular2-modal");
var people_service_1 = require("../people.service");
var person_model_1 = require("../person-model");
var AddPersonComponent = (function () {
    function AddPersonComponent(dialog, fb, peopleService) {
        this.dialog = dialog;
        this.fb = fb;
        this.peopleService = peopleService;
        this.createForm();
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }
    AddPersonComponent.prototype.createForm = function () {
        this.personForm = this.fb.group({
            avatar: '',
            firstName: '',
            lastName: '',
            address: '',
            age: '',
            interests: ''
        });
    };
    AddPersonComponent.prototype.ngOnChanges = function () { };
    AddPersonComponent.prototype.beforeDismiss = function () {
        return false;
    };
    AddPersonComponent.prototype.beforeClose = function () {
        return false;
    };
    AddPersonComponent.prototype.close = function () {
        this.dialog.close();
    };
    AddPersonComponent.prototype.formSubmit = function () {
        var _this = this;
        this.person = this.prepareSavePerson();
        this.peopleService.addPerson(this.person)
            .then(function (res) {
            alert("New Person added!");
            return true;
        })
            .then(function (res) {
            _this.close();
            return true;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AddPersonComponent.prototype.prepareSavePerson = function () {
        var formModel = this.personForm.value;
        var savePerson = {
            id: 0,
            avatar: formModel.avatar,
            firstName: formModel.firstName,
            lastName: formModel.lastName,
            address: formModel.address,
            age: formModel.age,
            interests: formModel.interests
        };
        return savePerson;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", person_model_1.Person)
    ], AddPersonComponent.prototype, "person", void 0);
    AddPersonComponent = __decorate([
        core_1.Component({
            selector: 'app-add-person',
            templateUrl: 'app/people/add-person/add-person.component.html',
            styleUrls: ['app/people/add-person/add-person.component.css']
        }),
        __metadata("design:paramtypes", [angular2_modal_1.DialogRef,
            forms_1.FormBuilder,
            people_service_1.PeopleService])
    ], AddPersonComponent);
    return AddPersonComponent;
}());
exports.AddPersonComponent = AddPersonComponent;
//# sourceMappingURL=add-person.component.js.map