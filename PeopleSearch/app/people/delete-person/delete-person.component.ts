import { Component, OnChanges} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { PeopleService } from '../people.service';

@Component({
    selector: 'app-delete-person',
    templateUrl: 'app/people/delete-person/delete-person.component.html',
    styleUrls: ['app/people/delete-person/delete-person.component.css']
})
export class DeletePersonComponent implements OnChanges, CloseGuard, ModalComponent<BSModalContext> {

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
        // Use the id passed from people.component to populate the delete form
        var id = this.dialog.context['id'];

        this.personForm = this.fb.group({
            personId : id
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

    // 
    formSubmit() {
        this.peopleService.deletePerson(this.dialog.context['id'])
            .then(res => {
                alert("Person Successfully deleted!");
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
}