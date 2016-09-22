import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/recipes/recipe-list.component.html',
    styleUrls: ['app/recipes/recipe-list.component.css'],
    pipes: [RecipeFilterPipe],
    directives: [ROUTER_DIRECTIVES, StarComponent]
})

export class RecipeListComponent implements OnInit {
    pageTitle: string = "Recipe List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    recipes: IRecipe[];

    constructor(private _recipeService: RecipeService) {

    }

    ngOnInit(): void {
        this._recipeService.getRecipes()
            .subscribe(
            recipes => this.recipes = recipes,
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}