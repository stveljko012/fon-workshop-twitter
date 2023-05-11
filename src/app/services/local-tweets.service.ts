import { Injectable } from '@angular/core';
import { Tweet } from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class LocalTweetsService {
  private tweets: Tweet[] = [
    {
      id: '1',
      content: '#Dummy tweet',
      hashtags: ['#dummy'],
      userId: '321',
    },
    {
      id: '2',
      content: '#Dummy tweet',
      hashtags: ['#dummy'],
      userId: '321',
    },
    {
      id: '3',
      content: '#Dummy tweet',
      hashtags: ['#dummy'],
      userId: '321',
    },
  ];

  constructor() {}

  getTweets(): Tweet[] {
    return this.tweets;
  }

  removeTweet(): void {}

  addTweet(): void {}
}
