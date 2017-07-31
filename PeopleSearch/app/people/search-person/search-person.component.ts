import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-person',
    templateUrl: 'app/people/search-person/search-person.component.html',
    styleUrls: ['app/people/search-person/search-person.component.css']
})
export class SearchPersonComponent {

    @Output() onKeyUp: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    search(term) {
        this.onKeyUp.emit(term);
    }
}