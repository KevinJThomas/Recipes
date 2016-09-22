import { PipeTransform, Pipe } from 'angular2/core';
import { IRecipe } from './recipe';

@Pipe({
    name: 'recipeFilter'
})

export class RecipeFilterPipe implements PipeTransform {

    transform(value: IRecipe[], args: string[]): IRecipe[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((recipe: IRecipe) =>
            recipe.recipeName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}