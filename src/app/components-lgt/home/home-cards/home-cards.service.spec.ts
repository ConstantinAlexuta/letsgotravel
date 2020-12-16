import { TestBed } from '@angular/core/testing';

import { HomeCardsService } from './home-cards.service';

describe('HomeCardsService', () => {
  let service: HomeCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
