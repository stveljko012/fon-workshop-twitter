import { Component } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(public tweetsService: TweetsService) {}
}
