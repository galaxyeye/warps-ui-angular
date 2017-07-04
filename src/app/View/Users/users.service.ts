import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User} from './user';
import {Jsonp} from "@angular/http";

@Injectable()
export class UsersService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private jsonp: Jsonp) { }

  list() {
    return this.jsonp.request(`${this.url}?callback=JSONP_CALLBACK`)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  get(id: number) {
    const url = `${this.url}/${id}`;
    return this.jsonp.get(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  add(user: User) {
    return this.jsonp.post(this.url, JSON.stringify(user))
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  update(user: User) {
    const url = `${this.url}/${user.id}`;
    return this.jsonp.put(url, JSON.stringify(user))
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  delete(id: number) {
    const url = `${this.url}/${id}`;
    return this.jsonp.delete(url)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
