import { Component }       from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {Hero} from './hero';
import { HeroService }     from './hero.service';
import { MenuService }     from './menu.service';
import { DashboardComponent } from './dashboard.component';
import { ContactUsComponent } from './contact-us.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  selector: 'my-app',
template: `
  <nav class="navbar navbar-default navbar-fixed-top">
      <div>
        <div class="navbar-header">
         <div class="sidebar-toggle-btn"><i class="hand-cursor fa fa-bars fa-2x" aria-hidden="true" (click)="toggleSidebar()"></i></div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Sample Application</a>
        </div>
        
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a [routerLink]="['Dashboard']">Dashboard</a></li>
            <li><a [routerLink]="['Dashboard','DashboardDetail']">Dashboard detail</a></li>
            <li><a [routerLink]="['Heroes']">Heroes</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="sidebar">
          <ul class="nav nav-sidebar">         
            <li [class.active]="router.isRouteActive(router.generate(['/Dashboard']))"><a [routerLink]="['Dashboard']">Dashboard<span class="sr-only">(current)</span></a></li>
            <li [class.active]="router.isRouteActive(router.generate(['/Heroes']))"><a [routerLink]="['Heroes']">Heroes<span class="sr-only">(current)</span></a></li>
            <li [class.active]="router.isRouteActive(router.generate(['/ContactUs']))"><a [routerLink]="['ContactUs']">ContactUs<span class="sr-only">(current)</span></a></li>
          </ul>
       </div>
       <div class="col-sm-12 col-md-12 main" (click)="closeSidebar()">
           <router-outlet></router-outlet>
       </div>
    </div>
   </div>
`,

 directives: [ROUTER_DIRECTIVES],
 providers: [
  ROUTER_PROVIDERS,
  HeroService,
  MenuService
 ],
 // styleUrls: ['app/app.component.css'],


})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
{
  path: '/dashboard/...',
  name: 'Dashboard',
  component: DashboardComponent,

},
{
  path: '/ContactUs',
  name: 'ContactUs',
  component: ContactUsComponent,
},
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
}
])

export class AppComponent {
  title = 'Tour of Heroes';
    menus: Hero[];
    
   constructor(
    private _menuService: MenuService, private router: Router) { }
  getMenuItems() {
    this._menuService.getMenuItems().then(heroes => this.menus = heroes);
  }
  public isRouteActive(route) {
    return this.router.isRouteActive(this.router.generate(route))
}
  ngOnInit() {
    this.getMenuItems();
  }
  toggleSidebar() {
    if(document.getElementsByClassName('sidebar')[0].classList.contains("open"))
      document.getElementsByClassName('sidebar')[0].classList.remove("open")
    else
      document.getElementsByClassName('sidebar')[0].classList.add("open")
  }
  closeSidebar() {
    if(document.getElementsByClassName('sidebar')[0].classList.contains("open"))
      document.getElementsByClassName('sidebar')[0].classList.remove("open")
  }
  
}
