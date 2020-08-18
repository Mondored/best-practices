import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-band'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/home']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['/stock']">Product List</a></li>
    </ul>
  </nav>
  <div class='containter'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Stocks-SPA';
}
