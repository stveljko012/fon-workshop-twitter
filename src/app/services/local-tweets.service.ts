import { Injectable } from '@angular/core';
import { Tweet } from '../app.types';

@Injectable({
  providedIn: 'root',
})
export class LocalTweetsService {
  private tweets: Tweet[] = [];

  constructor() {}

  getTweets(): Tweet[] {
    return [...this.tweets];
  }

  removeTweet(): void {}

  addTweet(tweet: Tweet): void {
    this.tweets.push(tweet);
  }
}
