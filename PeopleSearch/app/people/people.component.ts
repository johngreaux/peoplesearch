import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from './people.service';
import { Person } from './person-model';
import { AddPersonComponent } from './add-person/add-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'app-people',
    templateUrl: 'app/people/people.component.html',
    styleUrls: ['app/people/people.component.css']
})
export class PeopleComponent implements OnInit {

    p;  // pagination page tracking
    people: Person[] = [];
    busy: Promise<any>;

    constructor(private peopleService: PeopleService, public modal: Modal) { }

    ngOnInit() {
        this.p = 1;
        this.busy = this.peopleService.getPeople()
            .then(data => {
                this.people = data;
            })
            .catch(err => {
                console.log(err);
            });
    }

    // Open the bootstrap modal with the add person form.
    // Wait for promise complete on successful form submit and refresh the people table
    addPersonModal() {
        var modal = this.modal.open(AddPersonComponent, overlayConfigFactory({}, BSModalContext));

        modal.then((resultPromise) => {
            resultPromise.result.then((result) => {
                this.busy = this.peopleService.getPeople()
                    .then(data => {
                        this.people = data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            () => { });
        });
    }

    // Open the bootstrap modal with the delete person form.
    // Wait for promise complete on successful form submit and refresh the people table
    deletePersonModal(id) {
        var modal = this.modal.open(DeletePersonComponent, overlayConfigFactory({ id : id }, BSModalContext));

        // this.busy is used to display the loading overlay while waiting for the people service promise to complete
        modal.then((resultPromise) => {
            resultPromise.result.then((result) => {
                this.busy = this.peopleService.getPeople()
                    .then(data => {
                        this.people = data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            () => { });
        });
    }

    search(term) {
        this.peopleService.searchPeople(term)
            .then(data => {
                this.people = data;
            })
            .catch(err => {
                console.log(err);
            });
    }
}