import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';


@Component({
    templateUrl: 'app/recipes/recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit {
    pageTitle: string = "Recipe Details";
    errorMessage: string;
    viewShow: boolean = false;

    recipes: IRecipe[];
    recipe: IRecipe;

    constructor(private _routeParams: RouteParams,
        private _router: Router,
        private _recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe(
            recipes => this.recipes = recipes,
            error => this.errorMessage = <any>error);
        
        this.getRecipe();
    }

    onBack(): void {
        this._router.navigate(['Recipes']);
    }

    getRecipe(): void {
        if (this.recipes) {
            for (let recipe of this.recipes) {
                if (recipe.recipeId == +this._routeParams.get('id')) {
                    this.recipe = recipe;
                    this.viewShow = !this.viewShow;
                    break;
                }
            }
        } else {
            console.log("HELLO?");
        }
    }
}