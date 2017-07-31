import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';

import { PeopleComponent } from './people.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';

import { PeopleService } from './people.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        BusyModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    exports: [
        PeopleComponent
    ],
    providers: [
        PeopleService
    ],
    declarations: [
        PeopleComponent,
        AddPersonComponent,
        DeletePersonComponent,
        SearchPersonComponent
    ],
    entryComponents: [
        AddPersonComponent,
        DeletePersonComponent
    ]
})
export class PeopleModule { }