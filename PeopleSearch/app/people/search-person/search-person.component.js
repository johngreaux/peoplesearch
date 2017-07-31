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
var SearchPersonComponent = (function () {
    function SearchPersonComponent() {
        this.onKeyUp = new core_1.EventEmitter();
    }
    SearchPersonComponent.prototype.ngOnInit = function () { };
    SearchPersonComponent.prototype.search = function (term) {
        this.onKeyUp.emit(term);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SearchPersonComponent.prototype, "onKeyUp", void 0);
    SearchPersonComponent = __decorate([
        core_1.Component({
            selector: 'app-search-person',
            templateUrl: 'app/people/search-person/search-person.component.html',
            styleUrls: ['app/people/search-person/search-person.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SearchPersonComponent);
    return SearchPersonComponent;
}());
exports.SearchPersonComponent = SearchPersonComponent;
//# sourceMappingURL=search-person.component.js.map