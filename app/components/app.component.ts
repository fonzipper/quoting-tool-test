import {Component, OnInit} from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import { ActivatedRoute } from '@angular/router';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
// import {CalculatorComponent} from "./calculator/calculator.component";
import {MainPageComponent} from "./main-page/main-page.component";
// import {CalculatorService} from "../services/calculator.service";

@Component({
    selector: 'my-app',
    templateUrl: './components/app.component.html',
    styleUrls: ['./components/app.component.css']
})

@RouteConfig([
    {
        path: '/',
        name: 'MainPage',
        component: MainPageComponent
    }
])



export class AppComponent implements OnInit{
    name: string = "Angular 2 on Express";
    sid: string;
    private sub: any;
    
    constructor(private _router: ActivatedRoute){}
    
    ngOnInit() {
        this.sub = this._router.params.subscribe(params => {
            this.sid = params.sid;
        })
    }
}