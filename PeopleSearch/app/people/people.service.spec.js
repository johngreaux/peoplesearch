"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var people_service_1 = require("./people.service");
describe('People transformer service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [people_service_1.PeopleService]
        });
    });
    it('Should return a collection of people', testing_1.inject([people_service_1.PeopleService], function (peopleService) {
        expect(peopleService).toBeDefined();
        expect(peopleService.getPeople()).toContain("");
    }));
});
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toBe(true); });
});
//# sourceMappingURL=people.service.spec.js.map