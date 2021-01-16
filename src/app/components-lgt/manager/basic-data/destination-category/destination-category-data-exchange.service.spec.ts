import { TestBed } from '@angular/core/testing';

import { DestinationCategoryDataExchangeService } from './destination-category-data-exchange.service';

describe('DestinationCategoryDataExchangeService', () => {
  let service: DestinationCategoryDataExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationCategoryDataExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
