import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers} from '@angular/http'

@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
    styleUrls: ['components/about/about.component.css']
})
export class AboutComponent {
    name: string = "About Us";
    param: string;

    constructor(private params: ActivatedRoute, private http: Http) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
    }

    testConnection() {
      var headers = new Headers();
      headers.append("Content-type", "text/json");
      headers.append("Authorization", "OAuth " + this.param);
      return Promise.resolve(this.http.get("https://rc--box22.cs15.my.salesforce.com/services/apexrest/RelaywareRestAPI", {
          headers: headers
      }).map(res => {
          this.name = res;
      }));
    }
}
