import { Component } from '@angular/core';
import { TweetsService } from './services/tweets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private tweetsService: TweetsService) {
    this.tweetsService.loadTweets();
  }
}
