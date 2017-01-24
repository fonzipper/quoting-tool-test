import { Component OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})
export class HomeComponent implements OnInit {
    name: string = "Home page";
    users: {};
    sid: string;

    constructor(http: Http, _route: ActivatedRoute) {
        http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.sid = params['sid'];
        })
    }
}
