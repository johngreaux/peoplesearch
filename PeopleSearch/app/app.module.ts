import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BusyModule } from 'angular2-busy';

import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BusyModule,
        PeopleModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }