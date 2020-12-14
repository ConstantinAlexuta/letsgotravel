import { TestBed } from '@angular/core/testing';

import { CarouselBootstrapService } from './carousel-bootstrap.service';

describe('CarouselBootstrapService', () => {
  let service: CarouselBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
