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
var DeletePersonComponent = (function () {
    function DeletePersonComponent(dialog, fb, peopleService) {
        this.dialog = dialog;
        this.fb = fb;
        this.peopleService = peopleService;
        this.createForm();
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }
    DeletePersonComponent.prototype.createForm = function () {
        // Use the id passed from people.component to populate the delete form
        var id = this.dialog.context['id'];
        this.personForm = this.fb.group({
            personId: id
        });
    };
    DeletePersonComponent.prototype.ngOnChanges = function () { };
    DeletePersonComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DeletePersonComponent.prototype.beforeClose = function () {
        return false;
    };
    DeletePersonComponent.prototype.close = function () {
        this.dialog.close();
    };
    // 
    DeletePersonComponent.prototype.formSubmit = function () {
        var _this = this;
        this.peopleService.deletePerson(this.dialog.context['id'])
            .then(function (res) {
            alert("Person Successfully deleted!");
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
    DeletePersonComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-person',
            templateUrl: 'app/people/delete-person/delete-person.component.html',
            styleUrls: ['app/people/delete-person/delete-person.component.css']
        }),
        __metadata("design:paramtypes", [angular2_modal_1.DialogRef,
            forms_1.FormBuilder,
            people_service_1.PeopleService])
    ], DeletePersonComponent);
    return DeletePersonComponent;
}());
exports.DeletePersonComponent = DeletePersonComponent;
//# sourceMappingURL=delete-person.component.js.map