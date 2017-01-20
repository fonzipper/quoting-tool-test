import {Component} from 'angular2/core';
// import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
// import {CalculatorComponent} from "./calculator/calculator.component";
// import {MainPageComponent} from "./main-page/main-page.component";
// import {CalculatorService} from "../services/calculator.service";

@Component({
    selector: 'my-app',
    templateUrl: './components/app.component.html',
    styleUrls: ['./components/app.component.css']
})

// @RouteConfig([
//     {
//         path: '/',
//         name: 'MainPage',
//         component: MainPageComponent
//     },
//     {
//         path: '/calculator',
//         name: 'Calculator',
//         component: CalculatorComponent
//     }
// ])



export class AppComponent {
    name: string = "Angular 2 on Express";
}