import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { WebPageSearchService } from '../../Service/web-page-search.service';
import { WebPage } from '../../Model/web-page';

@Component({
  selector: 'app-web-page-search',
  templateUrl: './web-page-search.component.html',
  styleUrls: [ './web-page-search.component.css' ],
  providers: [WebPageSearchService]
})

export class WebPageSearchComponent implements OnInit {
  page: Observable<WebPage[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private pageSearchService: WebPageSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.pages = this.searchTerms
    //   .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => term   // switch to new observable each time the term changes
    //     // return the http search observable
    //     ? this.pageSearchService.search(term)
    //     // or the observable of empty webPages if there was no search term
    //     : Observable.of<WebPage[]>([]))
    //   .catch(error => {
    //     // TODO: add real error handling
    //     console.log(error);
    //     return Observable.of<WebPage[]>([]);
    //   });
  }

  gotoDetail(page: WebPage): void {
    let link = ['/detail', page.baseUrl];
    this.router.navigate(link);
  }
}
