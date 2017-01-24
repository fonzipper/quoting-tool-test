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

    constructor(private route: ActivatedRoute) {
        // this.sid = params.sid;
    }

    ngOnInit() {
        // debugger;
        this.route.params.subscribe((params: Params) => {
          // debugger;
            this.sid = params['sid'];
            console.log('params: ' + params);
        })
    }
}
