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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/delay");
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
        this.delayMs = 0; // Modify this value to simulate server latency on getPeople()
        this.apiUrl = '/api/people';
    }
    // Returns a collection of person objects
    PeopleService.prototype.getPeople = function () {
        return this.http.get(this.apiUrl + '/getpeople/')
            .delay(this.delayMs)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // Not implemented at this time.
    PeopleService.prototype.getPerson = function (id) {
        return this.http.get(this.apiUrl + '/getperson/' + id)
            .toPromise()
            .then(this.extractData)
            .then(this.handleError);
    };
    // Returns a collection of person objects based on the given search criteria
    PeopleService.prototype.searchPeople = function (query) {
        if (query) {
            return this.http.get(this.apiUrl + '/searchpeople/' + query)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.getPeople();
        }
    };
    // Add the given person to the db
    PeopleService.prototype.addPerson = function (person) {
        return this.http.post(this.apiUrl + '/postperson/', person)
            .toPromise();
    };
    // Not implemented at this time.
    PeopleService.prototype.updatePerson = function (person) {
        return this.http.put(this.apiUrl + '/putperson/', person)
            .toPromise();
    };
    // Remove a person from the db
    PeopleService.prototype.deletePerson = function (id) {
        return this.http.delete(this.apiUrl + '/deleteperson/' + id)
            .toPromise();
    };
    // Formats response data into json format
    PeopleService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    // Formats any recieved error
    PeopleService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.statusText : 'Server Error';
        return errMsg || [];
    };
    PeopleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map