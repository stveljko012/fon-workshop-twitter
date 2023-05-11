import { Component } from '@angular/core';
import { Tweet } from '../../app.types';
import { LocalTweetsService } from '../../services/local-tweets.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  tweets: Tweet[] = [];

  constructor(private localTweetsService: LocalTweetsService) {
    this.tweets = this.localTweetsService.getTweets();
  }
}
