import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { WebPage } from '../Model/web-page';

@Injectable()
export class WebPageSearchService {

  constructor(private http: Http) {}

  search(keywords: string): Observable<WebPage[]> {
    return this.http
      .get(`api/pages?text=${keywords}`)
      .map(response => response.json().data as WebPage[]);
  }
}
