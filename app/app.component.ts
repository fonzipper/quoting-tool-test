import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
<h1>My First {{name}} app</h1>
<router-outlet></router-outlet>

<a [routerLink]="['/home', {sid: \'sdfsds\'}]">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>`,
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor() {}
}
