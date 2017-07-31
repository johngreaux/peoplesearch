import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { HttpModule, Headers, RequestMethod, Response, ResponseOptions, BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { } from 'jasmine';
import { PeopleService } from '../people/people.service';
import { Person } from '../people/person-model';

describe('People Service', () => {
    let mockBackend: MockBackend;

    // Set-up the mockbackend context
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PeopleService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backend, defaultOptions);
                    }
                }
            ],
            imports: [
                HttpModule
            ]
        });

        mockBackend = getTestBed().get(MockBackend);
    });

    // Evaluate the getPeople() service function
    it('should get people', function() {
        let peopleService: PeopleService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                            {
                                 id: 1000
                            }]
                        }
                    )));
                });

            peopleService = getTestBed().get(PeopleService);
            expect(peopleService).toBeDefined();

            peopleService.getPeople().then((people: Person[]) => {
                expect(people.length).toBeDefined();
                expect(people[0].id).toEqual(1000);
            });
        });
    });
});