import { TestBed } from '@angular/core/testing';

import { OffersPurchasedService } from './offers-purchased.service';

describe('OffersPurchasedService', () => {
  let service: OffersPurchasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersPurchasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
