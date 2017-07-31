"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
var people_service_1 = require("../people/people.service");
describe('People Service', function () {
    var mockBackend;
    // Set-up the mockbackend context
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                people_service_1.PeopleService,
                testing_2.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }
                }
            ],
            imports: [
                http_1.HttpModule
            ]
        });
        mockBackend = testing_1.getTestBed().get(testing_2.MockBackend);
    });
    // Evaluate the getPeople() service function
    it('should get people', function () {
        var peopleService;
        testing_1.getTestBed().compileComponents().then(function () {
            mockBackend.connections.subscribe(function (connection) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: [
                        {
                            id: 1000
                        }
                    ]
                })));
            });
            peopleService = testing_1.getTestBed().get(people_service_1.PeopleService);
            expect(peopleService).toBeDefined();
            peopleService.getPeople().then(function (people) {
                expect(people.length).toBeDefined();
                expect(people[0].id).toEqual(1000);
            });
        });
    });
});
//# sourceMappingURL=people.service.spec.js.map