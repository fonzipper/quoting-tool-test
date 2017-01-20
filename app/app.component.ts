import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>This is new {{name}}</h1>`,
})
export class AppComponent  { name = 'Quoting Tool'; }
