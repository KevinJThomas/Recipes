import { Injectable } from 'angular2/core';
import { IBlog } from './blog';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
    private _blogUrl = 'api/blogs/blogs.json';

    constructor(private _http: Http) { }

    getBlogs(): Observable<IBlog[]> {
        return this._http.get(this._blogUrl)
            .map((response: Response) => <IBlog[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}