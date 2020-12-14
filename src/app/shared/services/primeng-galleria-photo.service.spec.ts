import { TestBed } from '@angular/core/testing';

import { PrimengGalleriaPhotoService } from './primeng-galleria-photo.service';

describe('PrimengGalleriaPhotoService', () => {
  let service: PrimengGalleriaPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengGalleriaPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
