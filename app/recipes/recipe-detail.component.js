System.register(['angular2/core', 'angular2/router', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1;
    var RecipeDetailComponent;
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
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams, _router, _recipeService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._recipeService = _recipeService;
                    this.pageTitle = "Recipe Details";
                    this.viewShow = false;
                }
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._recipeService.getRecipes()
                        .subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
                    this.getRecipe();
                };
                RecipeDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Recipes']);
                };
                RecipeDetailComponent.prototype.getRecipe = function () {
                    if (this.recipes) {
                        for (var _i = 0, _a = this.recipes; _i < _a.length; _i++) {
                            var recipe = _a[_i];
                            if (recipe.recipeId == +this._routeParams.get('id')) {
                                this.recipe = recipe;
                                this.viewShow = !this.viewShow;
                                break;
                            }
                        }
                    }
                    else {
                        console.log("HELLO?");
                    }
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/recipes/recipe-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, recipe_service_1.RecipeService])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});
//# sourceMappingURL=recipe-detail.component.js.map