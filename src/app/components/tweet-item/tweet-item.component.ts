import { Component, Input } from '@angular/core';
import { Tweet } from '../../app.types';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss'],
})
export class TweetItemComponent {
  @Input() tweet?: Tweet;
}
