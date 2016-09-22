System.register(['angular2/core', 'angular2/router', './blog.service'], function(exports_1, context_1) {
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
    var core_1, router_1, blog_service_1;
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent(_blogService) {
                    this._blogService = _blogService;
                }
                BlogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._blogService.getBlogs()
                        .subscribe(function (recipes) { return _this.blogs = recipes; }, function (error) { return _this.errorMessage = error; });
                };
                BlogComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/blog/blog.component.html',
                        styleUrls: ['app/blog/blog.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [blog_service_1.BlogService]
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map