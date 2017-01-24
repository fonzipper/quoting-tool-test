import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response} from '@angular/http'

@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
    styleUrls: ['components/about/about.component.css']
})
export class AboutComponent {
    name: string = "Test SignUp";
    param: string;
    sid: string;
    result: any;
    failure: Boolean = false;

    constructor(private route: ActivatedRoute, private http: Http) {
        route.params.subscribe((data: Params) => {
          debugger;
          this.param = data.id;
          this.sid = data.sid;
        });
    }

    testConn(){
        this.testConnection().then(result => result.subscribe(result => {
          this.result = result;
          this.failure = (result.status == 'failure');
        }))
    }

    testConnection() {
      var headers = new Headers();
      headers.append("Content-type", "text/json");
      headers.append("Authorization", "OAuth " + this.sid);
      return Promise.resolve(this.http.get("https://rc--box22.cs15.my.salesforce.com/services/apexrest/RelaywareRestAPI?id="+this.param, {
          headers: headers
      }).map((res: Response) => {
          return res.json();
      }));
    }
}
