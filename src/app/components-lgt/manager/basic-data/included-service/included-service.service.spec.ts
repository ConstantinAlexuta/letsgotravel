import { TestBed } from '@angular/core/testing';

import { IncludedServiceService } from './included-service.service';

describe('IncludedServiceService', () => {
  let service: IncludedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncludedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
