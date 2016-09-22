import { Injectable } from 'angular2/core';
import { IRecipe } from './recipe';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
    private _recipeUrl = 'api/recipes/recipes.json';

    constructor(private _http: Http) { }

    getRecipes(): Observable<IRecipe[]> {
        return this._http.get(this._recipeUrl)
            .map((response: Response) => <IRecipe[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}