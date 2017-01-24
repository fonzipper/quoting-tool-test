import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, Response} from '@angular/http'

@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
    styleUrls: ['components/about/about.component.css']
})
export class AboutComponent {
    name: string = "About Us";
    param: string;
    result: any;
    failure: Boolean = false;

    constructor(private params: ActivatedRoute, private http: Http) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
    }

    testConn(){
        debugger;
        this.testConnection().then(result => result.subscribe(result => {
          // debugger;
          this.result = result;
          this.failure = (result.status == 'failure');
        }))
    }

    testConnection() {
      // debugger;
      var headers = new Headers();
      headers.append("Content-type", "text/json");
      headers.append("Authorization", "OAuth " + this.param);
      return Promise.resolve(this.http.get("https://rc--box22.cs15.my.salesforce.com/services/apexrest/RelaywareRestAPI?id=006e000000Ctrpz", {
          headers: headers
      }).map((res: Response) => {
          return res.json();
      }));
      // console.log(rr);
    }
}
