/**
 * @Author: wiz
 * @Date:   11.16.2017 06:06pm
 * @Filename: app.module.ts
 * @Last modified by:   wiz
 * @Last modified time: 11.16.2017 06:58pm
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { SomethingComponent } from './something.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    SomethingComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // SomethingComponent
  ]
})
export class AppModule { }
