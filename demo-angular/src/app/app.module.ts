import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { RouterModule} from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeContactsComponent } from './employee-contacts/employee-contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'employees',
        component: EmployeesComponent
      },
      {
        path:'employee-contacts',
        component: EmployeeContactsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
