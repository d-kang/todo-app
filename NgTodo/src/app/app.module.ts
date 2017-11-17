/**
 * @Author: wiz
 * @Date:   11.16.2017 06:06pm
 * @Filename: app.module.ts
 * @Last modified by:   wiz
 * @Last modified time: 11.16.2017 06:23pm
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SomethingComponent } from './something.component';


@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, SomethingComponent]
})
export class AppModule { }
