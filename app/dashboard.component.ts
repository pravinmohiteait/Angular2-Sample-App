import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardChildComponent } from './dashboard-child.component';
import { DashboardDetailChildComponent } from './dashboard-detailchild.component';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
styleUrls: ['app/dashboard.component.css'],
 directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardChildComponent,
        useAsDefault: true
  },
  {
    path: '/detail',
    name: 'DashboardDetail',
    component: DashboardDetailChildComponent
  }
  
])
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
  private _router: Router,
  private _heroService: HeroService) {
}

  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
 gotoDetail(hero: Hero) {
  let link = ['HeroDetail', { id: hero.id }];
  this._router.navigate(link);
}

}

