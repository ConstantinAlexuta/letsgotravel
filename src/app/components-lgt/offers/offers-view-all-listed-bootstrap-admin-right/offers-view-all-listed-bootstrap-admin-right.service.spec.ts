import { TestBed } from '@angular/core/testing';

import { OffersViewAllListedBootstrapAdminRightService } from './offers-view-all-listed-bootstrap-admin-right.service';

describe('OffersViewAllListedBootstrapAdminRightService', () => {
  let service: OffersViewAllListedBootstrapAdminRightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersViewAllListedBootstrapAdminRightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
