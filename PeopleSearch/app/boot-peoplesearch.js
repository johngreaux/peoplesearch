"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_service_person_management_1 = require("./services/app.service.person-management");
var http_1 = require("@angular/http");
var person_management_component_1 = require("./components/person-management/person-management.component");
//enableProdMode();
platform_browser_dynamic_1.bootstrap(person_management_component_1.PersonManagementComponent, [http_1.HTTP_PROVIDERS, app_service_person_management_1.AppServiceTodoList]);
//# sourceMappingURL=boot-peoplesearch.js.map