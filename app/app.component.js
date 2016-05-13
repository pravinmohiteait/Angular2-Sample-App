System.register(['angular2/core', 'angular2/router', './hero.service', './menu.service', './dashboard.component', './heroes.component', './hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, menu_service_1, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_menuService, router) {
                    this._menuService = _menuService;
                    this.router = router;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.getMenuItems = function () {
                    var _this = this;
                    this._menuService.getMenuItems().then(function (heroes) { return _this.menus = heroes; });
                };
                AppComponent.prototype.isRouteActive = function (route) {
                    return this.router.isRouteActive(this.router.generate(route));
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getMenuItems();
                };
                AppComponent.prototype.toggleSidebar = function () {
                    if (document.getElementsByClassName('sidebar')[0].classList.contains("open"))
                        document.getElementsByClassName('sidebar')[0].classList.remove("open");
                    else
                        document.getElementsByClassName('sidebar')[0].classList.add("open");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div>\n        <div class=\"navbar-header\">\n         <div class=\"sidebar-toggle-btn\"><i class=\"hand-cursor fa fa-bars fa-2x\" aria-hidden=\"true\" (click)=\"toggleSidebar()\"></i></div>\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Sample Application</a>\n        </div>\n        \n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a [routerLink]=\"['Dashboard']\">Dashboard</a></li>\n            <li><a [routerLink]=\"['Dashboard','DashboardDetail']\">Dashboard detail</a></li>\n            <li><a [routerLink]=\"['Heroes']\">Heroes</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"sidebar\">\n          <ul class=\"nav nav-sidebar\">         \n            <li [class.active]=\"router.isRouteActive(router.generate(['/Dashboard']))\"><a [routerLink]=\"['Dashboard']\">Dashboard<span class=\"sr-only\">(current)</span></a></li>\n            <li [class.active]=\"router.isRouteActive(router.generate(['/Heroes']))\"><a [routerLink]=\"['Heroes']\">Heroes<span class=\"sr-only\">(current)</span></a></li>\n            <li [class.active]=\"router.isRouteActive(router.generate(['/Heroes']))\"><a [routerLink]=\"['Heroes']\">Heroes<span class=\"sr-only\">(current)</span></a></li>\n          </ul>\n       </div>\n       <div class=\"col-sm-12 col-md-12 main\">\n           <router-outlet></router-outlet>\n       </div>\n    </div>\n   </div>\n",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService,
                            menu_service_1.MenuService
                        ],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/dashboard/...',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                        },
                        {
                            path: '/detail/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map