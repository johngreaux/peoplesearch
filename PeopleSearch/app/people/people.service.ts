import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from './person-model';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';

@Injectable()
export class PeopleService {

    delayMs = 0;    // Modify this value to simulate server latency on getPeople()
    apiUrl = '/api/people';

    constructor(private http: Http) { }

    // Returns a collection of person objects
    getPeople(): Promise<Person[]> {
        return this.http.get(this.apiUrl + '/getpeople/')
            .delay(this.delayMs)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    // Not implemented at this time.
    getPerson(id) {
        return this.http.get(this.apiUrl + '/getperson/' + id)
            .toPromise()
            .then(this.extractData)
            .then(this.handleError);
    }

    // Returns a collection of person objects based on the given search criteria
    searchPeople(query): Promise<Person[]> {
        if (query) {
            return this.http.get(this.apiUrl + '/searchpeople/' + query)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.getPeople();
        }
    }

    // Add the given person to the db
    addPerson(person) {
        return this.http.post(this.apiUrl + '/postperson/', person)
            .toPromise(); 
    }

    // Not implemented at this time.
    updatePerson(person) {
        return this.http.put(this.apiUrl + '/putperson/', person)
            .toPromise();
    }

    // Remove a person from the db
    deletePerson(id) {
        return this.http.delete(this.apiUrl + '/deleteperson/' + id)
            .toPromise();
    }

    // Formats response data into json format
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    // Formats any recieved error
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? error.statusText : 'Server Error';

        return errMsg || [];
    }
}