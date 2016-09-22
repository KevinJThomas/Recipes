System.register(['angular2/core', 'angular2/router', './recipe.service', './recipe-filter.pipe', '../shared/star.component'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1, recipe_filter_pipe_1, star_component_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (recipe_filter_pipe_1_1) {
                recipe_filter_pipe_1 = recipe_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService) {
                    this._recipeService = _recipeService;
                    this.pageTitle = "Recipe List";
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                RecipeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._recipeService.getRecipes()
                        .subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
                };
                RecipeListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/recipes/recipe-list.component.html',
                        styleUrls: ['app/recipes/recipe-list.component.css'],
                        pipes: [recipe_filter_pipe_1.RecipeFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES, star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});
//# sourceMappingURL=recipe-list.component.js.map