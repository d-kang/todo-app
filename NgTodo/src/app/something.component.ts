/**
 * @Author: wiz
 * @Date:   11.16.2017 06:11pm
 * @Filename: app.component.ts
 * @Last modified by:   wiz
 * @Last modified time: 11.16.2017 07:04pm
 */

import { Component } from '@angular/core';

@Component({
  selector: 'something-else',
  templateUrl: './something.component.html',
  // styleUrls: ['./app.component.css']
})
export class SomethingComponent {
  something = 'something is rendering!'
  boo = function(e) {
    console.log('e', e);
    console.log('hi')
  }

  model = {}
}
