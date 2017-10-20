import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TriStateCheckboxModule } from './tri-state-checkbox/tri-state-checkbox.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TriStateCheckboxModule
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
