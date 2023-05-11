import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss'],
})
export class TweetItemComponent {
  @Input() content = '';
}
