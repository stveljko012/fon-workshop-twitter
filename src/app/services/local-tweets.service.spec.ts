import { TestBed } from '@angular/core/testing';

import { LocalTweetsService } from './local-tweets.service';

describe('LocalTweetsService', () => {
  let service: LocalTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
