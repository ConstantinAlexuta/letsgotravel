import { TestBed } from '@angular/core/testing';

import { ViewHomeCaruselBootstrapService } from './view-home-carusel-bootstrap.service';

describe('ViewHomeCaruselBootstrapService', () => {
  let service: ViewHomeCaruselBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewHomeCaruselBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
