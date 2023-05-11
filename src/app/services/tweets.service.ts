import { Injectable } from '@angular/core';
import { AddTweetPayload, Tweet } from '../app.types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private apiUrl = 'https://twitter.veljko.dev/api/tweets';
  private tweets: Tweet[] = [];

  constructor(private httpClient: HttpClient) {}

  loadTweets(): void {
    this.httpClient.get<Tweet[]>(this.apiUrl).subscribe((response) => {
      this.tweets = response;
    });
  }

  getTweets(): Tweet[] {
    return [...this.tweets];
  }

  addTweet(tweet: AddTweetPayload): void {
    this.httpClient.post(this.apiUrl, tweet).subscribe(() => {
      this.loadTweets();
    });
  }

  removeTweet(id: string): void {
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.loadTweets();
    });
  }
}
