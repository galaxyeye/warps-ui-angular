/**
 * Created by vincent on 17-6-15.
 */
import { Injectable } from '@angular/core';
import {Headers, Http, Jsonp} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WebPage } from '../Model/web-page';
import {getResponseURL} from "@angular/http/src/http_utils";
import {Outlink} from "../Model/outlink";
import {IndexDocument} from "../Model/index-document";

@Injectable()
export class WebPageService {

  readonly HOST: string = "http://localhost:8182/";

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = this.HOST + 'api';

  constructor(
    private http: Http,
    private jsonp: Jsonp
  ) {}

  seeds(): Promise<Outlink[]> {
    return this.http.get(`${this.baseUrl}/seeds`)
      .toPromise()
      .then(response => response.json() as Outlink[])
      .catch(this.handleError);
  }

  metrics(): Promise<Outlink[]> {
    return this.http.get(`${this.baseUrl}/metrics`)
      .toPromise()
      .then(response => response.json() as Outlink[])
      .catch(this.handleError);
  }

  get(pageUrl: string): Promise<WebPage> {
    return this.http.get(`${this.baseUrl}/pages?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage)
      .then(page => console.log(page))
      .catch(this.handleError);
  }

  links(pageUrl: string, args: string): Promise<WebPage> {
    return this.http.get(`${this.baseUrl}/pages/links?args=${args}&url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage)
      .catch(this.handleError);
  }

  fields(pageUrl: string, args: string): Promise<WebPage>  {
    return this.http.get(`${this.baseUrl}/pages/fields?args=${args}&url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage)
      .catch(this.handleError);
  }

  entities(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/entities?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage)
      .catch(this.handleError);
  }

  representation(pageUrl: string, args: string) {
    return this.http.get(`${this.baseUrl}/pages/representation?args=${args}&url=${pageUrl}`)
      .toPromise()
      .catch(this.handleError);
  }

  fetch(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/fetch?url=${pageUrl}`)
      .toPromise()
      .catch(this.handleError);
  }

  parse(pageUrl: string): Promise<WebPage> {
    return this.http.get(`${this.baseUrl}/pages/parse?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage)
      .catch(this.handleError);
  }

  index(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/index?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as IndexDocument)
      .catch(this.handleError);
  }

  delete(pageUrl: string): Promise<number> {
    return this.jsonp.delete(`${this.baseUrl}/pages/delete?id=${pageUrl}`, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  getFieldsOfOutPages(pageUrl: string, args: string): Promise<WebPage[]> {
    return this.http.get(`${this.baseUrl}/pages/outgoing/fields?args=${args}&url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  getEntityFieldsOfOutPages(pageUrl: string, args: string): Promise<WebPage[]> {
    return this.http.get(`${this.baseUrl}/pages/outgoing/entities?args=${args}&url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  fetchOutPages(pageUrl: string): Promise<WebPage[]> {
    return this.http.get(`${this.baseUrl}/pages/outgoing/fetch?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  parseOutPages(pageUrl: string): Promise<WebPage[]> {
    return this.http.get(`${this.baseUrl}/pages/outgoing/parse?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  indexOutPages(pageUrl: string): Promise<IndexDocument[]> {
    return this.http.get(`${this.baseUrl}/pages/outgoing/index?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as IndexDocument[])
      .catch(this.handleError);
  }

  updateByOutPages(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/update-by-out-pages?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  inject(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/inject?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  injectOutPages(pageUrl: string, linkFilter: string) {
    return this.http.get(`${this.baseUrl}/pages/outgoing/inject?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  unInject(pageUrl: string) {
    return this.http.get(`${this.baseUrl}/pages/outgoing/uninject?url=${pageUrl}`)
      .toPromise()
      .then(response => response.json() as WebPage[])
      .catch(this.handleError);
  }

  unInjectOutPages(pageUrl: string) {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
