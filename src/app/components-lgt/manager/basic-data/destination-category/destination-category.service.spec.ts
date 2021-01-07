import { TestBed } from '@angular/core/testing';

import { DestinationCategoryService } from './destination-category.service';

describe('DestinationCategoryService', () => {
  let service: DestinationCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
