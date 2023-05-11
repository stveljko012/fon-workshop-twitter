import { Component } from '@angular/core';
import { LocalTweetsService } from '../../services/local-tweets.service';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.scss'],
})
export class TweetInputComponent {
  userInput = '';

  constructor(private tweetsService: TweetsService) {}

  submit(): void {
    if (!this.userInput) {
      return;
    }

    this.tweetsService.addTweet({
      title: 'title',
      content: this.userInput,
      hashtags: [],
      userId: 'userId',
    });

    this.userInput = '';
  }
}
