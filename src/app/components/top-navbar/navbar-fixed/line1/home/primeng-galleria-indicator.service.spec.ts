import { TestBed } from '@angular/core/testing';

import { PrimengGalleriaIndicatorService } from './primeng-galleria-indicator.service';

describe('PrimengGalleriaIndicatorService', () => {
  let service: PrimengGalleriaIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengGalleriaIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
