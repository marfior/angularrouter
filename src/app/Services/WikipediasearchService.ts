/**
 * Created by stc2 on 22/02/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class WikipediasearchService{

  constructor(private jsonp: Jsonp) { }

  public search(term): Observable<any> {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    let obsv = this.jsonp.get('https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response => response.json()[1]);

    if (term.length == 1){
      return obsv.delay(4000);
    }

    return obsv;
  }

/*
  public search(term) : Observable<any>
  {  // get data using a restful API
    return
  .map(responseObj => responseObj.json()
    .map(jsonCookie => new Cookie(jsonCookie) )
  )
  */
  }
