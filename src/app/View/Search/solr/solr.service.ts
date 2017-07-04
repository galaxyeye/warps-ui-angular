/**
 * Created by vincent on 17-6-15.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SolrDocument } from './solr-document';

@Injectable()
export class SolrService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private solrUrl = 'api/pages';

  constructor(private http: Http) { }

  home() {}

  list(): Promise<SolrDocument[]> {
    return this.http.get(this.solrUrl)
      .toPromise()
      .then(response => response.json().data as SolrDocument[])
      .catch(this.handleError);
  }

  get(pageUrl: string): Promise<SolrDocument> {
    const url = `${this.solrUrl}?url=${pageUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as SolrDocument)
      .catch(this.handleError);
  }

  delete(pageUrl: string): Promise<void> {
    const url = `${this.solrUrl}/delete?url=${pageUrl}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<SolrDocument> {
    return this.http
      .post(this.solrUrl, JSON.stringify({name: name}), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as SolrDocument)
      .catch(this.handleError);
  }

  update(document: SolrDocument): Promise<SolrDocument> {
    const url = `${this.solrUrl}/${document.baseUrl}`;
    return this.http
      .put(url, JSON.stringify(document), {headers: this.headers})
      .toPromise()
      .then(() => document)
      .catch(this.handleError);
  }

  query() {}

  crawlIn24h() {}

  crawlIn48h() {}

  crawlToday() {}

  crawlYesterday() {}

  publishToday() {}

  publishYesterday() {}

  publishIn24h() {}

  publishIn48h() {}



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
