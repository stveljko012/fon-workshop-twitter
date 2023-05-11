import { Component, Input } from '@angular/core';
import { Tweet } from '../../app.types';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss'],
})
export class TweetItemComponent {
  @Input() tweet?: Tweet;

  constructor(private tweetsService: TweetsService) {}

  remove(): void {
    if (!this.tweet) {
      return;
    }

    this.tweetsService.removeTweet(this.tweet.id);
  }
}
