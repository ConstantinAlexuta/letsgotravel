import { TestBed } from '@angular/core/testing';

import { OffersBasicsDataService } from './offers-basics-data.service';

describe('OffersBasicsDataService', () => {
  let service: OffersBasicsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersBasicsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
