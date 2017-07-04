import {Component, Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { WebPageService } from '../../Service/web-page.service';
import { WebPage } from '../../Model/web-page';
import set = Reflect.set;

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {

  constructor(
    private pageService: WebPageService,
    private router: Router) {}

  ngOnInit(): void {
    this.test();
  }

  test() {
    let input = "ld -o -a b -x y -s -w hello --version 3.14 http://war.163.com/";
    let command = HomeComponent.parseCmdLine(input);

    console.log(command);
    // console.log(this.router.createUrlTree(["/page"], {queryParams:{args:command.args, url: command.pageUrl}}));
  }

  static parseCmdLine(input: string) {
    let cmd:string = null;
    let args = null;
    let pageUrl:string = null;
    let pos:number = input.indexOf(" http");
    if (pos !== -1) {
      cmd = input.substring(0, pos);
      pageUrl = input.substring(pos + 1);

      args = input.split(" ");
      if (args.length > 0) {
        cmd = args[0];
        args = args.slice(1, args.length - 1);
        args = args.join(":").replace(/:-/gi, ",-");
      }
    }

    return {cmd: cmd, args: args, pageUrl: pageUrl};
  }

  run(input: string) {
    let command = HomeComponent.parseCmdLine(input);
    let cmd:string = command.cmd;
    let args = command.args;
    let pageUrl:string = command.pageUrl;

    switch (cmd) {
      case "ld":
      case "load":
        this.router.navigate(["/page"], {queryParams:{args:args, url: pageUrl}});
        break;
      case "j":
      case "inject":
        this.router.navigate(["/page/inject"], {queryParams:{args:args, configuredUrl: pageUrl}});
        break;
      case "uj":
      case "uninject":
        this.router.navigate(["/page/uninject"], {queryParams:{args:args, url: pageUrl}});
        break;
      case "f":
      case "fetch":
        this.router.navigate(["/page/fetch"], {queryParams:{args:args, url: pageUrl}});
        break;
      case "ps":
      case "parse":
        this.router.navigate(["/page/parse"], {queryParams:{args:args, url: pageUrl}});
        break;
      case "index":
        this.router.navigate(["/page/index"], {queryParams:{args:args, url: pageUrl}});
        break;
      default:
        this.router.navigate(["/search", {queryParams:{args:args, w: input}}]);
        break;
    }
  }
}
