import 'rxjs/add/operator/switchMap';
import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location } from '@angular/common';

import { WebPage } from '../../Model/web-page';
import { WebPageService } from '../../Service/web-page.service';
import {FormBuilder} from "@angular/forms";
import {arrayify} from "tslint/lib/utils";
import {IndexDocument} from "../../Model/index-document";

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: [ './web-page-component.css' ]
})

@Injectable()
export class WebPageComponent implements OnInit {
  public targetUrl: string;
  public args: string;
  public page: WebPage;
  public outgoingPages: WebPage[];
  public indexDocument: IndexDocument;
  public outgoingIndexDocument: IndexDocument[];
  public pageHtml: string;

  constructor(
    private pageService: WebPageService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.targetUrl = params['url'];
      this.args = params['args'];
      this.pageService.fields(this.targetUrl, this.args)
        .then(
          page => {
            this.page = page;
          },
          response => {
            if (response.status === 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  goBack(): void {
    this.location.back();
  }

  fetch(pageUrl: string) {
    this.pageService.fetch(this.targetUrl).then(content => this.pageHtml = content);
  }

  parse(pageUrl: string) {
    this.pageService.parse(this.targetUrl).then(page => {
      this.page = page;
      this.indexDocument = null
    });
  }

  index(pageUrl: string) {
    this.pageService.index(this.targetUrl).then(indexDocument => {
      this.page = null;
      this.indexDocument = indexDocument
    });
  }

  fetchOutPages(pageUrl: string) {
    this.pageService.fetchOutPages(this.targetUrl).then(outgoingPages => {
      this.outgoingPages = outgoingPages;
      this.indexDocument = null
    });
  }

  parseOutPages(pageUrl: string) {
    this.pageService.parseOutPages(this.targetUrl).then(outgoingPages => {
      this.outgoingPages = outgoingPages;
      this.indexDocument = null
    });
  }

  indexOutPages(pageUrl: string) {
    this.pageService.indexOutPages(this.targetUrl).then(outgoingIndexDocument => {
      this.page = null;
      this.outgoingIndexDocument = outgoingIndexDocument
    });
  }
}
