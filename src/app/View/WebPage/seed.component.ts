import {Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { WebPageService } from '../../Service/web-page.service';
import {WebPage} from '../../Model/web-page';
import {Outlink} from "../../Model/outlink";

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html'
})

@Injectable()
export class WebPagesComponent implements OnInit {
  outlinks: Outlink[];
  pages: WebPage[] = [];
  selectedOutlink: Outlink;

  constructor(
    private pageService: WebPageService,
    private router: Router) {}

  ngOnInit(): void {
    this.pageService
      .seeds()
      .then(outlinks => this.outlinks = outlinks);
  }

  onSelect(outlink: Outlink): void {
    this.selectedOutlink = outlink;
  }
}
