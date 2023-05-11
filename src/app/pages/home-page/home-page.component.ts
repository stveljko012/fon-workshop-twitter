import { Component } from '@angular/core';
import { Tweet } from '../../app.types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  tweets: Tweet[] = [
    {
      id: '123',
      content: '#Dummy tweet',
      hashtags: ['#dummy'],
      userId: '321',
    },
  ];
}
