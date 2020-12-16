import { TestBed } from '@angular/core/testing';

import { HomeCarouselBootstrapService } from './home-carousel-bootstrap.service';

describe('HomeCarouselBootstrapService', () => {
  let service: HomeCarouselBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCarouselBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
