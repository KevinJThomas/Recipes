import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { WelcomeComponent } from './home/welcome.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { RecipeService } from './recipes/recipe.service';
import { ContactComponent } from './contact/contact.component';

@Component({ //TODO: make navigation work to the basic html pages
    selector: 'my-app',
    template: `
    <div class="container frontPage">
        <div class="row">
          <div class="col-sm-3">
            <a [routerLink]="['Welcome']"> <!-- CHANGE TO MY HOME PAGE -->
                <img src="./app/assets/images/myLogo3.png" class="img-reponsive center-block" />
            </a>
            <div class="sidebar-nav">
              <div class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <span class="visible-xs navbar-brand">Sidebar menu</span>
                </div>
                <div class="navbar-collapse collapse sidebar-navbar-collapse">
                  <ul class="nav navbar-nav" >
                    <li><a [routerLink]="['Recipes']"><i class="glyphicon glyphicon-cutlery"> Recipes</i></a></li>
                    <li><a [routerLink]="['Blog']"><i class="glyphicon glyphicon-book"> Blog</i></a></li>
                    <li><a [routerLink]="['Contact']"><i class="glyphicon glyphicon-envelope"> Contact</i></a></li>
                    <li><a [routerLink]="['About']"><i class="glyphicon glyphicon-search"> About</i></a></li>
                  </ul>
                </div> <!--/.nav-collapse -->
              </div>
            </div>
          </div>
          <div class="col-sm-9">
            <router-outlet></router-outlet>
          </div>
        </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p class="text-muted" style="text-align:right;">&copy; Kevin Thomas 2016</p>
      </div>
    </footer>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        RecipeService]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/recipes', name: 'Recipes', component: RecipeListComponent },
    { path: '/recipe/:id', name: 'RecipeDetail', component: RecipeDetailComponent },
    { path: '/about', name: 'About', component: AboutComponent },
    { path: '/blog', name: 'Blog', component: BlogComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent }
])

export class AppComponent {
}

//figure out detail pages
//figure out something for the empty slot in the nav bar
//implement mdbootstrap