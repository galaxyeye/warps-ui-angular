import { Component } from '@angular/core';

@Component({
  selector: 'app-warps',
  template: `
<nav class="twelve columns">
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/pages" routerLinkActive="active">Web Pages</a>
  <a routerLink="/users" routerLinkActive="active">Users</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  <a routerLink="/surfing" routerLinkActive="active">Surfing</a>
</nav>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Warps Pulsar';
}
