import { TestBed } from '@angular/core/testing';

import { CarouselNgBootstrapService } from './carousel-ng-bootstrap.service';

describe('CarouselNgBootstrapService', () => {
  let service: CarouselNgBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselNgBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
