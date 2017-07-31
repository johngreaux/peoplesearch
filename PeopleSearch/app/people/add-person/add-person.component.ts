import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { PeopleService } from '../people.service';
import { Person } from '../person-model';

@Component({
    selector: 'app-add-person',
    templateUrl: 'app/people/add-person/add-person.component.html',
    styleUrls: ['app/people/add-person/add-person.component.css']
})
export class AddPersonComponent implements OnChanges, CloseGuard, ModalComponent<BSModalContext> {
    @Input() person: Person;

    context: BSModalContext;
    personForm: FormGroup;

    constructor(
        public dialog: DialogRef<BSModalContext>,
        private fb: FormBuilder,
        private peopleService: PeopleService) {

        this.createForm();
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }

    createForm() {
        this.personForm = this.fb.group({
            avatar: '',
            firstName: '',
            lastName: '',
            address: '',
            age: '',
            interests: ''
        });
    }

    ngOnChanges() { }

    beforeDismiss(): boolean {
        return false;
    }

    beforeClose(): boolean {
        return false;
    }

    close() {
        this.dialog.close();
    }

    formSubmit() {
        this.person = this.prepareSavePerson();

        this.peopleService.addPerson(this.person)
            .then(res => {
                alert("New Person added!");
                return true;
            })
            .then(res => {
                this.close();
                return true;
            })
            .catch(err => {
                console.log(err);
            });   
    }

    prepareSavePerson(): Person {
        const formModel = this.personForm.value;
        const savePerson: Person = {
            id : 0,
            avatar: formModel.avatar as string,
            firstName: formModel.firstName as string,
            lastName: formModel.lastName as string,
            address: formModel.address as string,
            age: formModel.age as string,
            interests: formModel.interests as string
        }

        return savePerson;
    }
}