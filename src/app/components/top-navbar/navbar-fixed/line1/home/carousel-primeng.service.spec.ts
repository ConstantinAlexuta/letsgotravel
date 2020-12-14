import { TestBed } from '@angular/core/testing';

import { CarouselPrimengService } from './carousel-primeng.service';

describe('CarouselPrimengService', () => {
  let service: CarouselPrimengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselPrimengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
