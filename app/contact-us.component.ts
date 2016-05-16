import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
 import {Contact} from './ContactUs/contact.ts';
// import {HeroDetailComponent} from './hero-detail.component';
// import {HeroService} from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/ContactUS/contact.component.html',
  styleUrls:  ['app/ContactUs/contact.component.css'],
//   directives: [HeroDetailComponent]
})
export class ContactUsComponent implements OnInit {
//   heroes: Hero[];
//   selectedHero: Hero;
//   constructor(
//     private _router: Router,
//     private _heroService: HeroService) { }
//   getHeroes() {
//     this._heroService.getHeroes().then(heroes => this.heroes = heroes);
//   }
  ngOnInit() {
   console.log("initialisation");
  }
//   onSelect(hero: Hero) { this.selectedHero = hero; }
//   gotoDetail() {
//     this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
//   }
}
