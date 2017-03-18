import { Injectable }    from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Topic } from './topic';
import { TOPICS } from './mock-topics';

@Injectable()
export class TopicService {
	 private headers = new Headers({'Content-Type': 'application/json'});
  private topicsUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  constructor(private http: Http) { }

  getTopics(): Promise<Topic[]> {
  	return this.http.get(this.topicsUrl)
  		.toPromise()
  		.then(this.extractData)
  		.catch(this.handleError);
  }

  private extractData(res: Response) {
  	let body = res.json();
  	return body || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}