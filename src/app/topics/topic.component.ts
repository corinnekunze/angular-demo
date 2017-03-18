import { Component, OnInit } from '@angular/core';

import { Topic } from './topic';
import { TopicService } from './topic.service';

@Component({
  selector: 'topics',
  templateUrl: './topic.component.html',
  providers: [ TopicService ]
})

export class TopicComponent implements OnInit { 
	errorMessage: string;
	topics: Topic[];
	mode = 'Promise';

	constructor(private topicService: TopicService) { }

	getTopics(): void {
		this.topicService.getTopics()
			.then(
				topics => this.topics = topics,
				error => this.errorMessage = <any>error);
	}

	ngOnInit(): void {
		this.getTopics();
	}
}
