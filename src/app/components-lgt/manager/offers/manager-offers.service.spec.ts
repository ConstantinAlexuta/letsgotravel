import { TestBed } from '@angular/core/testing';

import { ManagerOffersService } from './manager-offers.service';

describe('ManagerOffersService', () => {
  let service: ManagerOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
