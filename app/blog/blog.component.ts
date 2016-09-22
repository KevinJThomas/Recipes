import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IBlog } from './blog';
import { BlogService } from './blog.service';

@Component({
    templateUrl: 'app/blog/blog.component.html',
    styleUrls: ['app/blog/blog.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [BlogService]
})

export class BlogComponent implements OnInit {
    errorMessage: string;

    blogs: IBlog[];

    constructor(private _blogService: BlogService) {

    }

    ngOnInit(): void {
        this._blogService.getBlogs()
            .subscribe(
            recipes => this.blogs = recipes,
            error => this.errorMessage = <any>error);
    }
}