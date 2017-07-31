"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_pagination_1 = require("ngx-pagination");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var angular2_busy_1 = require("angular2-busy");
var people_component_1 = require("./people.component");
var add_person_component_1 = require("./add-person/add-person.component");
var delete_person_component_1 = require("./delete-person/delete-person.component");
var search_person_component_1 = require("./search-person/search-person.component");
var people_service_1 = require("./people.service");
var PeopleModule = (function () {
    function PeopleModule() {
    }
    PeopleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                ngx_pagination_1.NgxPaginationModule,
                animations_1.BrowserAnimationsModule,
                angular2_busy_1.BusyModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule,
            ],
            exports: [
                people_component_1.PeopleComponent
            ],
            providers: [
                people_service_1.PeopleService
            ],
            declarations: [
                people_component_1.PeopleComponent,
                add_person_component_1.AddPersonComponent,
                delete_person_component_1.DeletePersonComponent,
                search_person_component_1.SearchPersonComponent
            ],
            entryComponents: [
                add_person_component_1.AddPersonComponent,
                delete_person_component_1.DeletePersonComponent
            ]
        })
    ], PeopleModule);
    return PeopleModule;
}());
exports.PeopleModule = PeopleModule;
//# sourceMappingURL=people.module.js.map