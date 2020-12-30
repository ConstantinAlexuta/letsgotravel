import { TestBed } from '@angular/core/testing';

import { OffersViewAllListedBootstrapSuperAdminLeftService } from './offers-view-all-listed-bootstrap-super-admin-left.service';

describe('OffersViewAllListedBootstrapSuperAdminLeftService', () => {
  let service: OffersViewAllListedBootstrapSuperAdminLeftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersViewAllListedBootstrapSuperAdminLeftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
