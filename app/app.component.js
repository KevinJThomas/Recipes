System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/welcome.component', './recipes/recipe-list.component', './recipes/recipe-detail.component', './about/about.component', './blog/blog.component', './recipes/recipe.service', './contact/contact.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, welcome_component_1, recipe_list_component_1, recipe_detail_component_1, about_component_1, blog_component_1, recipe_service_1, contact_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (recipe_list_component_1_1) {
                recipe_list_component_1 = recipe_list_component_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container frontPage\">\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <a [routerLink]=\"['Welcome']\"> <!-- CHANGE TO MY HOME PAGE -->\n                <img src=\"./app/assets/images/myLogo3.png\" class=\"img-reponsive center-block\" />\n            </a>\n            <div class=\"sidebar-nav\">\n              <div class=\"navbar navbar-default\" role=\"navigation\">\n                <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                  </button>\n                  <span class=\"visible-xs navbar-brand\">Sidebar menu</span>\n                </div>\n                <div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n                  <ul class=\"nav navbar-nav\" >\n                    <li><a [routerLink]=\"['Recipes']\"><i class=\"glyphicon glyphicon-cutlery\"> Recipes</i></a></li>\n                    <li><a [routerLink]=\"['Blog']\"><i class=\"glyphicon glyphicon-book\"> Blog</i></a></li>\n                    <li><a [routerLink]=\"['Contact']\"><i class=\"glyphicon glyphicon-envelope\"> Contact</i></a></li>\n                    <li><a [routerLink]=\"['About']\"><i class=\"glyphicon glyphicon-search\"> About</i></a></li>\n                  </ul>\n                </div> <!--/.nav-collapse -->\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-9\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <p class=\"text-muted\" style=\"text-align:right;\">&copy; Kevin Thomas 2016</p>\n      </div>\n    </footer>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            recipe_service_1.RecipeService]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/recipes', name: 'Recipes', component: recipe_list_component_1.RecipeListComponent },
                        { path: '/recipe/:id', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/blog', name: 'Blog', component: blog_component_1.BlogComponent },
                        { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//figure out detail pages
//figure out something for the empty slot in the nav bar
//implement mdbootstrap 
//# sourceMappingURL=app.component.js.map