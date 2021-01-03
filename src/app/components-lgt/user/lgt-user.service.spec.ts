import { TestBed } from '@angular/core/testing';

import { LgtUserService } from './lgt-user.service';

describe('LgtUserService', () => {
  let service: LgtUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgtUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
