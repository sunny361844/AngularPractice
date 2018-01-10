import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';


@NgModule({
  declarations: [AppComponent, ReactiveFormComponentComponent],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [ReactiveFormComponentComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppComponent);
